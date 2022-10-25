const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51LvDRBSDkcfJt12X0yu6gY0gbYgnqvbMyi0Wbee7RLF47gBINMOpelqxg68RQAD0V6AiaR1xdT4XyLvWxCOdlhjY00e4xTbQgv"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); //this will alllow us to send data and parse in JSON format

// - API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment Request Received BOOM!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //will be in subunits of currency like if dollars then cents or if rupees then paises.
    currency: "INR",
  });

  //OK - Created (if status is 201)
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5001/clone-8f6a7/us-central1/api -> backend site will be active here

// Every time we use the app both frontend and backend should be running
// to start backend the current directry should be
// --> C:\Users\gagan\Desktop\React22\amazon-clone\functions
// make sure that its in side functions folder
// after that type --> firebase emulators:start
