const PrankExecutorBase = require("./prank-executor-base");
const sizeOf = require('object-sizeof');
const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);
const path = require('path');

class OverloadCPU extends PrankExecutorBase {
  constructor(expressApp) {
    super(...arguments);
  }

  async start() {
    console.log(`Prank:About to overload CPU`)
    const fileContent = await readFilePromise(path.join(__dirname, './big-text-file.txt'));
    require("crypto").createCipher("aes192", fileContent);
  }

  stop() {
    //can't stop an atomic operation (crypto)
  }
}

module.exports = OverloadCPU;