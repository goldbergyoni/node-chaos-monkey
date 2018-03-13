class ChaosControl {
  constructor(expressApplication, configuration) {
    console.log(`Chaos monkey is set to active`);
    this.configuration = configuration;
    this.app = expressApplication;
  }

  start() {
    console.log(`Opening the zoo now`);
    const allPrank = this.getAllActivePranks([this.app]);
    allPrank.forEach(prank => {
      prank.on("sinStart", config => {
        console.log(config);
      });

      prank.on("sinOccured", config => {
        console.log(`Sin has just occured ${config}`);
      });
    });
  }

  getSinSchedule(sinConfig) {
    const ScheduleClass = require(`../schedules/${sinConfig.schedule.type}`);

    return new ScheduleClass(sinConfig.schedule);
  }

  st

  getAllActivePranks(sinParams) {
    const allSins = [];
    this.configuration.pranks
    .filter((prank) => prank.active === true)
    .forEach(sinConfiguration => {
      const SinClass = require(`../pranks/${sinConfiguration.file}`);
      const sinSchedule = this.getSinSchedule(sinConfiguration)
      allSins.push(
        new SinClass(
          sinConfiguration,
          sinSchedule,
          ...sinParams
        )
      );
      sinSchedule.start();
    });

    return allSins;
  }
}

module.exports = ChaosControl;