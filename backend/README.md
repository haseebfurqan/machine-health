# BellSant Machine Health API

Welcome to the BellSant Machine Health API! This API allows you to evaluate the health of various machines and their components based on provided data. This README provides instructions on how to set up and use the API.

## Prerequisites

Before you get started, make sure you have the following prerequisites installed on your system:

- Node.js: [Download Node.js](https://nodejs.org/)
- Yarn (optional but recommended, can use NPM instead): [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)

## Installation

Follow these steps to set up the BellSant Machine Health API:

1. Navigate to the project directory:

   ```bash
   cd api
   ```

2. Install dependencies using Yarn (or npm if you prefer):

   ```bash
   yarn
   ```

## Usage

### Starting the API

To start the API, run the following command:

```bash
yarn start
```

The API will be accessible at `http://localhost:3001` by default. You can change the port or other configurations in the `app.ts` file.

### Evaluating Machine Health

You can evaluate the health of a machine by sending a POST request to the `/machine-health` endpoint. Here's an example using cURL:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "machines": {
    "weldingRobot": {
      "errorRate": "0.5",
      "vibrationLevel": "2.5"
    }
  }
}' http://localhost:3001/machine-health
```

The response will include the machine name and its health score.

### API Endpoints

- `POST /machine-health`: Calculate the health of a machine based on provided data.

## Testing

You can add and run tests to ensure the correctness of the API. Follow these steps to add tests:

1. Locate the "tests" folder

2. Inside the "tests" folder, you can create test files for your code. You can use testing libraries like Jest, Mocha, or others to write your tests. There is a starter example test to help you get started.

3. To run the tests, use the following command:

   ```bash
   yarn test
   ```

## Customization

You can customize machine data and health evaluation logic by modifying the `machineData.json` file and the calculation functions in `app.ts`.