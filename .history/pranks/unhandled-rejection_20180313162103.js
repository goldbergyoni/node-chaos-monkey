const PrankBase = require("./prank-base");

class UnhandledRejection extends PrankBase {
  constructor(expressApp) {
    super(...arguments);
    
  }

  start() {
    console.log(`Prank:About to throw unhandled rejection`)
    throw new Error(this.context.configuration.properties.message);
  }

  stop() {
    //hmm how to remove middleware?
  }
}

module.exports = UnhandledRejection;