const API = require('./entry-points/api');
const ChaosControl = require('./chaos-control');

console.log('Chaos monkey starting point');
module.exports.initialize = (expressApp) => {
    return {
        api: new API(expressApp),
        chaosControl: new ChaosControl(expressApp)
    };
};

//TODO: add command-line entry point as well