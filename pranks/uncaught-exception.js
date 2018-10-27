const PrankBase = require("./prank-base");

class Route500ErrorSin extends PrankBase {
  constructor(expressApp) {
    super(...arguments);
    
  }

  start() {
    console.log(`Prank:About to throw uncaught exception`)
    throw new Error(this.context.configuration.properties.message);
  }

  stop() {
    //hmm no way to stop an exception that was thrown...
  }
}

module.exports = Route500ErrorSin;