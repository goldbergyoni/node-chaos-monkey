const EventEmitter = require("events");

class ImmediateSchedule extends EventEmitter {
  constructor(properties) {
    super();
    
    this.properties = properties;
    console.log(this.properties.fadeOutInMS);
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
