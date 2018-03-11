const PrankBase = require("./prank-base");
const sizeOf = require('object-sizeof');
const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);
require

class overloadMemory extends PrankBase {
  constructor(expressApp) {
    super(...arguments);
  }

  start() {
    console.log(`Prank:About to overload memory with content`)
    this.overloadMemory();
  }

  async overloadMemory(){
    console.log(`About to overload more memory into the process globals`)
    if(!global.state){
      global.state = [];
    }

    const fileContent = await readFilePromise('./big-text-file.txt');
    console.log(fileContent.substring(1, 100))
    global.state.push(fileContent);
    const currentMemorySizeInMB = sizeOf(global.state) * 1000 * 1000;
    console.debug(`Our fake object memory size is ${currentMemorySizeInMB} MB and the entire heap is ${process.memoryUsage()}`)
    if(currentMemorySizeInMB < 500){
      setTimeout(() => {
        this.overloadMemory();  
      }, 0);
    }
      
  }

  stop() {
    global.state = null;
  }
}

module.exports = overloadMemory;