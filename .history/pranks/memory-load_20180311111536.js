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
    if(!global.state){
      global.state = [];
    }

    fs.readFile('./big-text-file.txt', (content) =>{
      global.state.push(content);
    })
    const currentMemorySizeInMB = sizeOf(global.state) * 1000 * 1000;
    debug(`Our fake object memory size is ${currentMemorySizeInMB} MB`)
    if()
  }

  stop() {
    //hmm
  }
}

module.exports = ProcessExitSin;