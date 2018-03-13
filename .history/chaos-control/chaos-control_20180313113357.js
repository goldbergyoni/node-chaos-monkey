class ChaosControl {
  constructor(expressApplication, configuration) {
    console.log(`Chaos monkey is set to active`);
    this.configuration = configuration;
    this.app = expressApplication;
  }

  start() {
    console.log(`Opening the zoo now`);

    if(this.configuration.startMode === "startMode")
    const allPrank = this.startAllConfigurationPranks([this.app]);
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

    console.debug(
      `Chaos control is about to start the Prank ${prankConfig.name}`
    );
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
        this.startPrank(prankConfiguration, prankParams);
      });
  }
}

module.exports = ChaosControl;
