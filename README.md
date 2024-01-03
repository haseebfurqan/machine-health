# Factory Health Monitor - Authentication, State Management, and Persistence

## Overview

You are provided with a starter project that includes a React Native mobile app and a backend API, each in their respective folders. Each folder contains a README with instructions on how to run the builds. The goal of this coding challenge is to add authentication and session management to the app, improve the state management of the data returned by the API, and implement a persistence layer on the backend. When a user logs in, their history of data points and scores should be retrieved and displayed.

# Improvements for App
1. 
  User Authentication Added by the Api.
  when user first time signin it's credencials saved.
2. 
  Session management of the app for the user is implemented.
3. 
  Also I improved the state management of the app.
4. 
  Design of Machine State improved and also added the sign out button for user
  to sign out from the app.
5. 
  Each folder contains a README with instructions on how to run the builds.
6. Video link to check the app
 

# Improvements for BackEnd

   Api's are created for the user session management.
   these are created on local host.

### The Application

The application you'll be working on is a tool for evaluating the health of various machines in an automobile manufacturing plant. This plant features a range of machines, each with specific data points that you will use to assess the condition of the production process.

#### Machines and Their Variables

1. **Welding Robots**

   - Welding Robot Error Rate
   - Welding Arm Vibration Level
   - Electrode Wear
   - Gas Shielding Pressure
   - Welding Wire Feed Rate
   - Arc Stability
   - Weld Seam Width
   - Cooling System Efficiency

2. **Painting Stations**

   - Paint Flow Rate
   - Paint Pressure
   - Paint Color Consistency
   - Paint Nozzle Condition

3. **Assembly Lines**

   - Part Alignment Accuracy
   - Assembly Line Speed
   - Component Fitting Tolerance
   - Conveyor Belt Speed

4. **Quality Control Stations**
   - Inspection Camera Calibration
   - Inspection Light Intensity
   - Inspection Software Version
   - Inspection Criteria Settings

### Time Limit

You are expected to spend approximately 3 hours on this challenge. While we understand that building a app can be a never-ending task, we're interested in seeing how far you can get and how you prioritize tasks to maximize quality/delivery within the given time frame.

## Repository Structure

The repository is structured as follows:

```
├── native-app/
│   ├── source code files...
│   ├── README.md               # The README file for running the React Native Mobile app
│   └── ...
│
├── backend/
│   ├── source code files...
│   ├── README.md               # The README file for running the API Backend
│   └── ...
│
├── MachineHealth.apk           # The compiled android app for running on a device or emulator (if helpful)
├── README.md                   # This README file
```

## Getting Started

1. Fork this repository to your GitHub account.
2. Clone your forked repository to your local machine.

## Running the App Locally

To run the Machine Health Evaluation app locally, you'll need to set up and run both the React Native app and the API backend separately. Each of the respective folders are in this director and each have their own README files to help you get started.

To use the Machine Health Evaluation app locally, you'll need to keep both the API and the React Native app running simultaneously. It's recommended to open separate terminal/command windows for each and run them in parallel.

- In one terminal window, navigate to the `backend` folder and run the API backend.
- In another terminal window, navigate to the `native-app` folder and run the React Native app.

Keep in mind that the React Native app relies on the API to fetch and calculate machine health data. Ensure that the API is accessible to the app for it to function correctly.

For specific details on running the API and React Native app, refer to their respective README files in their respective folders.

## Requirements

1. **Authentication and Session Management:**

   - Implement user authentication in the Expo mobile app. Users should be able to log in securely using credentials.
   - Manage user sessions and ensure that users remain authenticated between app sessions.

2. **Data State Management:**

   - Review and update (as needed) the existing state management for data returned by the API. Feel free to bring in a state management library if it'd be helpful.
   - Ensure that the app efficiently manages and updates the state when new data points and scores are fetched.

3. **Persistence Layer on the Backend:**

   - Implement a persistence layer on the backend to store historical data points and scores for each user/machine.
   - When a new data point or score is recorded, ensure it is stored in the persistence layer for future retrieval.

4. **Stretch Goals (Optional):**
   - Implement a section to show the history of scores with trends over time.
   - Include visualizations such as charts or graphs to represent the trends in machine health scores.

## Guidelines

- Use the provided backend API and Expo mobile app as a starting point.
- Follow best practices for authentication and session management in React Native.
- Enhance the state management to ensure a clean and organized flow of data.
- Implement a persistence layer on the backend for storing historical data points and scores.
- Document any changes made to the existing codebase and provide a brief explanation of your architectural decisions.

## Submission

- Provide a link to your Git repository containing the updated project.
- Include instructions on how to run the modified builds locally.

## Evaluation Criteria

- Implementation of Authentication and Session Management
- Improvement of Data State Management
- Implementation of a Persistence Layer on the Backend
- Adherence to Best Practices
- Documentation
- Overall Code Quality

**Note:**
This project is designed to take approximately 3 hours, but there is no strict time limit. We are interested in seeing how far you can get and the quality of your final deliverable. Focus on completing the core requirements before attempting the stretch goals. Feel free to make reasonable assumptions if certain details are not explicitly provided. If you encounter challenges, document them and describe how you would address them with more time.
