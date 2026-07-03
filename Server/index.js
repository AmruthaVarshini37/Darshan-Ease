require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("DarshanEase Backend Running Successfully");
});

app.get("/test", (req, res) => {
  res.send("Backend Working Fine");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});