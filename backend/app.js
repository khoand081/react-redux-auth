const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passPort = require("passport");
const config = require("./apps/common/database");

const users = require("./apps/routes/user");

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

const app = express();
app.use(passPort.initialize());
require("./passport")(passPort);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", users);

app.use("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
