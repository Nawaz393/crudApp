const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const UserRoute = require("./Routes/UserRoutes");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

const main = async () => {
  console.log("Connecting to MongoDB...");

  console.log(process.env.mongo_uri);

  app.use("/users", UserRoute);
  try {
    const res = await mongoose.connect(process.env.mongo_uri);

    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

main();

app.listen(3000, () => console.log("Server running on port 3000"));
