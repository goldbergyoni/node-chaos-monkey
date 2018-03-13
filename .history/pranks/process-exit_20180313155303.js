const PrankBase = require("./prank-base");
class ProcessExitSin extends PrankBase {
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