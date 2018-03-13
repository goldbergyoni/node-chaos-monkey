const EventEmitter = require("events");

class PrankBase extends EventEmitter {
  constructor(configuration, schedule, expressApp) {
    super();
    console.log(`Sin ${configuration.name} is now initialized with the the
             following config ${configuration}`);

    this.context = {};
    this.context.expressApp = expressApp;
    this.context.configuration = configuration;
    this.context.schedule = schedule;
    schedule.on("start", () => {
      console.log(`Prank ${this.configuration.name} just received a start command from scheduler`)
      this.start();
    });
    schedule.on("stop", () => {
      this.stop();
    });
  }
}

module.exports = PrankBase;