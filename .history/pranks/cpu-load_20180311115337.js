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

  async overloadCPU(amountOfTimeInMS, startTime){
    console.debug(`Star`)
    const fileContent = await readFilePromise(path.join(__dirname, './big-text-file.txt'));
    require("crypto").createCipher("aes192", fileContent);
    const endTime = new Date();
    if((endTime - startTime) < amountOfTimeInMS){
      this.overloadCPU(amountOfTimeInMS, startTime);
    }
  }

  stop() {
    global.state = null;
  }
}

module.exports = overloadMemory;