const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
    },
    
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    
    password: {
        type: String,
        required: true,
    },

    scores: [

    ]

},
{timestamps: true})

userSchema.pre('save', async function (next) {

    if (this.isModified('password')) {

        this.password = await bcrypt.hash(this.password, 10)
    
    }
    next()   
})

module.exports = mongoose.model('Users',userSchema)