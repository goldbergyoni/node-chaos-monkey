const PrankBase = require("./prank-base");
const EventsEmitter = require("events").EventEmitter;
class ProcessExitSin extends PrankBase {
  constructor(expressApp) {
    super(...arguments);
    this.eventEmitter = new EventsEmitter();
  }

  start() {
    console.log(`Prank:About to overload memory with content`)
    if(!global.context){
      global.context = [];
    }n
  }

  stop() {
    //hmm
  }
}

module.exports = ProcessExitSin;