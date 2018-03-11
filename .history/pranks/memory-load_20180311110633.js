const PrankBase = require("./prank-base");
const sizeOf = require()

class ProcessExitSin extends PrankBase {
  constructor(expressApp) {
    super(...arguments);
    this.eventEmitter = new EventsEmitter();
  }

  start() {
    console.log(`Prank:About to overload memory with content`)
    if(!global.context){
      global.context = [];
    }
  }

  stop() {
    //hmm
  }
}

module.exports = ProcessExitSin;