const PrankBase = require("./prank-base");
const EventsEmitter = require("events").EventEmitter;
class ProcessExitSin extends PrankBase {
  constructor(expressApp) {
    super(...arguments);
    this.eventEmitter = new EventsEmitter();
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