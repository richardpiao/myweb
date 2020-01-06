//////setting up express//////////
const path = require("path");
const express = require("express");
const app = express();
const Score = require("./model/scoreModel.js");
const Email = require("./model/emailModel.js");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env"
});

app.use(bodyParser());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(`${__dirname}/public`));
/////setting up mongodb//////////
const mongoose = require("mongoose");
const password = process.env.PASSWORD;
const url = `mongodb+srv://richard:${password}@cluster0-buykz.mongodb.net/portfolio?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("======DB connection successful!===="));

/////////route////////////////////
app.get("/travel", (req, res) => {
  res.render("game");
});
app.post("/travel", (req, res) => {
  const score = new Score({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    timer: req.body.timer,
    timestamp: new Date()
  });
  Score.create(score, err => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/travel/score");
    }
  });
});
app.get("/travel/score", (req, res) => {
  Score.find({}, (err, score) => {
    if (err) {
      throw err;
    } else {
      res.render("score", {
        scores: score
      });
    }
  });
});

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/work", (req, res) => {
  res.render("work");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.post("/contact", (req, res) => {
  const score = new Email({
    name: req.body.name,
    address: req.body.email,
    message: req.body.message,
    timestamp: new Date()
  });
  Email.create(score, err => {
    if (err) {
      throw err;
    } else {
      res.redirect("/contact");
    }
  });
});
app.listen(8080, () => console.log("=============app is started=========="));