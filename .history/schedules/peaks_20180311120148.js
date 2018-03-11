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
    this.emit("start", {});
    const endTime = new Date();
    if((endTime - startTime) < this.properties.pickLengthInMS){
      this.peak(startTime)
    }
    this.sleepAndStart();
  }

  start(){
    console.log(`Peak schedule is initializing`);
    this.sleepAndStart();
  }
}

module.exports = Pea;