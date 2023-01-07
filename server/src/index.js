const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("../src/routes/auth");
const usersRoute = require("../src/routes/users");
const movieRoutes = require("../src/routes/movies");
const dotenv = require("dotenv");

dotenv.config("./.env");

console.log(process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Succesfull!"))
  .catch((err) => console.log(err));

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json());

app.use(cors(corsOptions));

app.use("", authRoute);

//app.use("", usersRoute);
app.use("", movieRoutes);

app.use("/movies", movieRoutes);

// stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.static(process.env.STATIC_DIR));

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 499,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(8800, () => {
  console.log("http://localhost:8800/");
});

//just a check
