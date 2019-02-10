const bodyParser = require("body-parser");
const express = require("express");

class ChaosControl {
  constructor(expressApplication) {
    console.log(`Chaos control is now starting`);

    //TODO: should we really rely on Express (which also demand the user to pass in params)?
    //maybe we can intercept on the HTTP layer
    this.app = expressApplication;
  }

  start() {
    console.log(`Opening the chaos zoo now`);
    if (this.configuration.startMode === "config") {
      this.startAllConfigurationPranks([this.app]);
    }
  }

  
  getPrankSchedule(prankDefinition) {
    const ScheduleClass = require(`../schedules/${prankDefinition.schedule.type}`);

    return new ScheduleClass(prankDefinition.schedule);
  }

  startPrankExecution(prankDefinition, prankParams=[]) {
    if (prankDefinition.active === false) {
      console.info(`Prank ${prankDefinition.name} is not active so not starting`);
      return;
    }

    console.info(
      `Chaos control is about to start the Prank ${prankDefinition.name}`
    );

    const PrankExecutor = require(`../pranks/${prankDefinition.file}`);
    const PrankSchedule = this.getPrankSchedule(prankDefinition);

    const prankToStart = new PrankExecutor(
      prankDefinition,
      PrankSchedule,
      [...prankParams, this.app]
    );
    PrankSchedule.start();
  }

  startAllConfigurationPranks(prankParams) {
    this.configuration.pranks
      .filter(prank => prank.active === true)
      .forEach(prankConfiguration => {
        this.startPrankExecution(prankConfiguration, prankParams);
      });
  }
}

module.exports = ChaosControl;