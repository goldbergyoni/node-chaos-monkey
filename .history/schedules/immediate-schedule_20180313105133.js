const EventEmitter = require("events");

class ImmediateSchedule extends EventEmitter {
  constructor() {
    console.log(fadeOutInMS);
    super();
    this.properties = properties;
    setTimeout(() => {
      console.log("boo1");
      this.emit("stop", {});
    }, this.properties.fadeOutInMS);
  }

  start() {
    console.log(`One time schedule is about to emit start event`);
    this.emit("start", {});
  }
}

module.exports = ImmediateSchedule;
