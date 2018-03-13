const ChaosControl = require("../chaos-control");

module.exports = expressApp => {
  const router = express.Router();

  router.post("/api/products", (req, res) => {
    console.log(`The product is ${req.body}`);
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
