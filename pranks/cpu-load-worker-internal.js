// do no use directly this prank!
const {
    createCipheriv
} = require("crypto");
const {
    generate
} = require("randomstring");

while (true) {
    const cipher = createCipheriv('aes-256-gcm', generate(32), generate(12));
    cipher.update(generate(2048));
    cipher.final();
    // we use here eval to make the compiler do less optimization
    // otherwise this loop can be optimized to do nothing
    eval();
}