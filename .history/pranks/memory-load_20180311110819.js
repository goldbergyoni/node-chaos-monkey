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

    fs.readFile('./big-text-file.txt', (content) =>{
      global.context.push(content);
    })
  }

  stop() {
    //hmm
  }
}

module.exports = ProcessExitSin;