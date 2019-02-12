//I wish I could drop this line
const ChaosMonkey = require("../..");

const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

//I wish I could use also a command line -> chaos-monkey -f app.js --test-command='npm test' -r report.html
ChaosMonkey.initialize(app);

var router = express.Router();

router.post("/api/products", (req, res) => {
  console.log(`The product is ${req.body}`);
  res.status(200).json(req.body);
});

router.get("/api/products", (req, res) => {
  console.log(`Get product was invoked`);
  res.status(200).json({});
});


process.on("uncaughtException", error => {
  console.log(`Uncaught error is now handled error`);
  console.log(error);
});

process.on("unhandledRejection", (reason, p) => {
  console.log(`Uncaught promise is now handled error`);
  console.log(p);
});

app.use(router);