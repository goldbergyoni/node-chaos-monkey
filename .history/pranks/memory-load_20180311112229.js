const PrankBase = require("./prank-base");
const sizeOf = require('object-sizeof');
var fs = require('fs');


class overloadMemory extends PrankBase {
  constructor(expressApp) {
    super(...arguments);
  }

  start() {
    console.log(`Prank:About to overload memory with content`)
    this.overloadMemory();
  }

  overloadMemory(){
    console.log(`About to overload more memory into the process globals`)
    if(!global.state){
      global.state = [];
    }

    fs.readFile('./big-text-file.txt', (content) =>{
      global.state.push(content);
    })
    const currentMemorySizeInMB = sizeOf(global.state) * 1000 * 1000;
    console.debug(`Our fake object memory size is ${currentMemorySizeInMB} MB and the entire heap is ${process.memoryUsage()}`)
    if(currentMemorySizeInMB < 500){
      set
    }
      this.overloadMemory();
  }

  stop() {
    global.state = null;
  }
}

module.exports = overloadMemory;