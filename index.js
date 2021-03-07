const fs = require('fs');
const loader = require('@assemblyscript/loader');
const imports = {
    big: {
        logme: (expected, actual) => console.log('Expected', expected, 'Actual', actual)
    }
};
const wasm = loader.instantiateSync(fs.readFileSync(__dirname + '/build/optimized.wasm'), imports);
module.exports = wasm.exports;
