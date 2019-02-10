const PrankExecutorBase = require("./prank-executor-base");
class ProcessExitSin extends PrankExecutorBase {
  constructor(expressApp) {
    super(...arguments);
  }

  start() {
    console.log(`Prank:About to exit the process`)
    process.exit(1)
  }

  stop() {
    //hmm
  }
}

module.exports = ProcessExitSin;