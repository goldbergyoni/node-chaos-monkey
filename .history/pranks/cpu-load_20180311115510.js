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
    console.log(`Prank:About to overload CPU`)
    this.overloadCPU(new Date());
  }

  async overloadCPU(amountOfTimeInMS, startTime){
    console.debug(`Starting to overload CPU at time ${startTime}`)
    const fileContent = await readFilePromise(path.join(__dirname, './big-text-file.txt'));
    require("crypto").createCipher("aes192", fileContent);
    const endTime = new Date();
    if((endTime - startTime) < amountOfTimeInMS){
      this.overloadCPU(amountOfTimeInMS, startTime);
    }
    console.debug(`Finished to overload CPU at time ${endTime}`)
  }

  stop() {
    global.state = null;
  }
}

module.exports = overloadMemory;