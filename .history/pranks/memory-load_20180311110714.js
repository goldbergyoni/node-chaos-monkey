const PrankBase = require("./prank-base");
const sizeOf = require('object-sizeof');
var fs = require('fs');


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

    global.context.push()
  }

  stop() {
    //hmm
  }
}

module.exports = ProcessExitSin;