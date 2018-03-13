class ChaosControl {
  constructor(expressApplication, configuration) {
    console.log(`Chaos monkey is set to active`);
    this.configuration = configuration;
    this.app = expressApplication;
  }

  start() {
    console.log(`Opening the zoo now`);
    const allPrank = this.startAllConfigurationPranks([this.app]);
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

  startPrank(prankConfig, prankParams) {
    if (prankConfig.active === false) {
      console.debug(`Prank ${prankConfig.name} is not active so not starting`);
      return;
    }
    const PrankClass = require(`../pranks/${sinConfiguration.file}`);
    const PrankSchedule = this.getSinSchedule(sinConfiguration);
    const prankToStart = new PrankClass(
      sinConfiguration,
      PrankSchedule,
      ...prankParams
    );
    PrankSchedule.start();
  }

  startAllConfigurationPranks(prankParams) {
    this.configuration.pranks
      .filter(prank => prank.active === true)
      .forEach(prankConfiguration => {
        this.s
      });
  }
}

module.exports = ChaosControl;
