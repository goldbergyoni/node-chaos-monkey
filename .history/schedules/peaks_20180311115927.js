const EventEmitter = require("events");

class PeakSchedule extends EventEmitter {
  constructor(properties) {
    super();
    this.properties = properties;
  }

  sleepAndStart(){
    this.emit("stop", {});
    setTimeout(() => {
      this.peak(new Date());
    }, this.properties.sleepTimeBetweenPeaksInMS);
  }

  Peak(startTime){
    
  }

  start(){
    console.log(`One time schedule is about to emit start event`);
    this.emit("start", {});
  }
}

module.exports = ImmediateSchedule;