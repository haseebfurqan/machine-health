import express, {Request, Response} from 'express';
const User = require('./modals/User.js')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors')
// import {getMachineHealth} from './machineHealth';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// To get environment variable
// dotenv.config({path: './config.env'})
// const PORT = process.env.port
// const DB_URL = process.env.database

const PORT = 3001;
const DB_URL = 'mongodb+srv://amaanmalik0360:machinehealth123@machinehealthcluster.fesjaq1.mongodb.net/?retryWrites=true&w=majority'

const JWT_SECRET = 'MERNSECRET';
// Connecting to database
/** */
 mongoose.connect(DB_URL )
  .then(()=> console.log('Database connected'))
  .catch((error: any)=> console.log(error))


// Endpoint to get machine health score
app.get('/hello', async (req, res) => res.send('Hello World!'));

app.post('/signup', async (req,res) => {
  const {name, email, password} = req.body;
  console.log("name is:",name)
  try
  {
      const user = await User.findOne({email: email})
      if(user){
          return res.status(400).json({message:'User already registered'})
      }

      const new_user = new User({ name, email, password })
      await new_user.save()
      res.status(201).json({message:"User registered Successfully"})         
  }
  catch(err){
      console.log(err)
      res.status(409).json({message: "Error Found", err});
  }

})

app.post('/login', async (req, res) => {
  try
  {
        const user = await User.findOne({email: req.body.email})
        console.log("User is", user)
        if(user){
            const userExists = await bcrypt.compare(req.body.password, user.password)       
                
            if(userExists){
                const token = await jwt.sign({_id: user._id, email: user.email}, JWT_SECRET, {expiresIn: '6h'})
                const {_id, name, email} = user;

                res.status(200).json({ token, user: { _id, name, email } })
            }
            else{
                res.status(400).json({message:"Invalid Password"})     
            }
        }
        else{
          res.status(404).json({message: "User Not Found"});
        }
    }
    catch(error){
        res.status(409).json({message: "Error Found", error});
    }
})

app.patch('/update/:id', 
// middleware
async (req, res, next) => {
  console.log("Authorization starts.");
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Authorization Required' });
        }
        const token = req.headers.authorization.split(" ")[1];
        if(!token)
        {
            return res.status(401).json({message: 'Token Required'})
        }

        const user = jwt.verify(token, JWT_SECRET);
        console.log(user);
        if(!user)
        {
            return res.status(401).json({ message: 'Unauthorized User' });   
        }

        // Check if the user._id derived from token matches any user in database.
        const userExists = await User.findOne({_id: user._id});
        if(!userExists)
        {
            return res.status(401).json({ message: 'Unauthorized User'});
        }

        if(req.params.id != user._id)
        {
            return res.status(401).json({ message: 'Unauthorized User'});
        }
        console.log("Verification Successful.");
        next();
    } 
    catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
// endpoint
,async (req, res) => {
  try {
    const { score } = req.body;
    // Assume you have a user ID available in the request, e.g., req.user.id
    const userId = req.params.id;

    // Update the scores array using $push
    const result = await User.updateOne({ _id: userId }, { $push: { scores: score } });

    if (result.nModified === 0) {
      return res.status(404).json({ message: 'User not found or no modification' });
    }
    res.status(200).json({ message: 'Scores updated successfully' });
  } 
  catch (error) 
  {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// const 

// app.post('/machine-health', (req: Request, res: Response) => {
//   const result = getMachineHealth(req);
//   if (result.error) 
//   {
//      res.status(400).json(result);
//   } 
//   else 
//   {
//      res.json(result);
//   }
// });

app.listen(PORT, () => {
  console.log(`API is listening at http://localhost:${PORT}`);
});
