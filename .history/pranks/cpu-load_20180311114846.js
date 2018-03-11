const PrankBase = require("./prank-base");
const sizeOf = require('object-sizeof');
const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);
const path = require('path');

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

    const fileContent = await readFilePromise(path.join(__dirname, './big-text-file.txt'));
    global.state.push(fileContent);
    const currentMemorySizeInMB = sizeOf(global.state) / 1000 / 1000;
    console.debug(`Our fake object memory size is ${currentMemorySizeInMB} MB and the entire heap is ${util.inspect(process.memoryUsage())}`)
    if(currentMemorySizeInMB < this.context.configuration.properties.maxMemorySizeInMB){
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