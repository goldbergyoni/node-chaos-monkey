const PrankExecutorBase = require("./prank-executor-base");
const sizeOf = require('object-sizeof');
const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);
const path = require('path');

class overloadMemory extends PrankExecutorBase {
  constructor(expressApp) {
    super(...arguments);
  }

  start() {
    console.log(`Prank:About to overload memory with content`)
    this.active = true;
    this.overloadMemory();
  }

  async overloadMemory(){
    if(this.active === false){
      console.log('Stopping to overload memory as the prank seems not active anymore')
      return;
    }
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
    this.active = false;
    global.state = null;
  }
}

module.exports = overloadMemory;