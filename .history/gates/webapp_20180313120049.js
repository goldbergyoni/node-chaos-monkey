const ChaosControl = require("../chaos-control");

module.exports = expressApp => {
  const router = expressApp.Router();

  router.post("/chaos/pranks", (req, res) => {
    console.log(`Chaos gate was asked to start a new prankThe product is ${req.body}`);
    res.status(200).json(req.body);
  });

  process.on("uncaughtException", error => {
    console.log(`Uncaught error is now handled error`);
    console.log(error);
  });

  process.on("unhandledRejection", (reason, p) => {
    console.log(`Uncaught promise is now handled error`);
    console.log(error);
  });

  app.use(router);
};
