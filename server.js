const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const db = require("./db.js");
const app = express();
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());

db.Database();
app.use("/api/user", userRoutes);

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
