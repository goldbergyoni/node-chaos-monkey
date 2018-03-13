const ChaosControl = require("../chaos-control");

module.exports = expressApp => {
  const router = expressApp.Router();

  router.post("/chaos/pranks", (req, res) => {
    try {
      console.log(`Chaos gate was asked to start a new prank ${req.body}`);
      new ChaosControl().startPrank(req.body, expressApp);
      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);
      res.status(200).json({ status: "OK" });
    }
  });

  expressApp.use(router);
};
