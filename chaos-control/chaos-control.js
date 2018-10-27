const express = require("express");
const bodyParser = require("body-parser");

class ChaosControl {
  constructor(expressApplication, configuration) {
    console.log(`Chaos monkey is set to active`);
    this.configuration = configuration;
    this.app = expressApplication;
  }

  start() {
    console.log(`Opening the zoo now`);
    if (this.configuration.startMode === "config") {
      this.startAllConfigurationPranks([this.app]);
    }
    if (this.app) {
      this.registerAPI();
    }
  }

  registerAPI() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.app.use(bodyParser.json());

    const router = express.Router();
    router.post("/chaos/pranks", (req, res) => {
      try {
        console.log(
          `Chaos gate was asked to start a new prank ${JSON.stringify(
            req.body
          )}`
        );
        this.startPrankActivity(req.body, [this.app]);
        res.status(200).json({
          status: "OK"
        });
      } catch (e) {
        console.log(e);
        res.status(500).json(e);
      }
    });
    this.app.use(router);
  }

  getPrankSchedule(prankConfig) {
    const ScheduleClass = require(`../schedules/${prankConfig.schedule.type}`);

    return new ScheduleClass(prankConfig.schedule);
  }

  getPranksActivity() {
    //temporarily hard-coded, to be fixed in few days
    const result = {

    };

    return result;
  }

  getPranksPool() {
    //temporarily hard-coded, to be fixed in few days
    const result = [{
        name: "500-error-on-route",
        friendlyName: "API route returns 500 error",
        file: "500-error-on-route",
        active: true,
        properties: {
          urls: ["/api/products", "/anyurl"]
        },
        schedule: {
          type: "immediate-schedule",
          fadeOutInMS: 10000
        },
        description: 'Our monkey intercepts HTTP routes and return errors on your behalf',
        lastHappened: new Date(),
        expectations: 'Your monitoring system should notify, error should appear in log',
        reality: 'This feature is not implemented yet',
        success: 'Yes'
      },
      {
        name: "Process-exit",
        friendlyName: "Process exit",
        file: "process-exit",
        active: true,
        properties: {
          exitCode: 1
        },
        schedule: {
          type: "immediate-schedule",
          fadeOutInMS: 10000
        },
        description: 'Our monkey kills the process',
        lastHappened: new Date(),
        expectations: 'Your monitoring system should notify, a new process should be instantiated',
        reality: 'This feature is not implemented yet',
        success: 'No'
      },
      {
        name: "uncaught-exception",
        friendlyName: "Uncaught exception",
        file: "uncaught-exception",
        active: true,
        properties: {
          message: "Uncaught exception was thrown by the chaos monkey"
        },
        schedule: {
          type: "one-time-schedule",
          delay: 9000
        },
        description: 'Our monkey Throws an uncaught exception into the void',
        lastHappened: new Date(),
        expectations: 'Your monitoring system should notify, process should stay alive or new one should get instantiated',
        reality: 'This feature is not implemented yet',
        success: 'No'
      },
      {
        name: "unhandled-rejection",
        friendlyName: "Unhandled promise rejection",
        file: "unhandled-rejection",
        active: true,
        properties: {
          message: "Uncaught rejection was thrown by the chaos monkey"
        },
        schedule: {
          type: "one-time-schedule",
          delay: 10000
        },
        description: 'Our monkey Throws an uncaught promise rejection into the void',
        lastHappened: new Date(),
        expectations: 'Your monitoring system should notify, process should stay alive or new one should get instantiated',
        reality: 'This feature is not implemented yet',
        success: 'No'
      },
      {
        name: "memory-load",
        friendlyName: "Memory is overloaded",
        file: "memory-load",
        active: true,
        properties: {
          maxMemorySizeInMB: 10
        },
        schedule: {
          type: "one-time-schedule",
          delay: 1000,
          fadeOutInMS: 30000
        },
        description: 'Our monkey constantly increases the RAM, if no limit was specified the entire allowed 1.7GB will be used',
        lastHappened: new Date(),
        expectations: 'Your monitoring system should notify',
        reality: 'This feature is not implemented yet',
        success: 'No'
      },
      {
        name: "cpu-load",
        friendlyName: "Busy CPU",
        file: "cpu-load",
        active: true,
        properties: {},
        schedule: {
          type: "peaks",
          sleepTimeBetweenPeaksInMS: 3000,
          pickLengthInMS: 10000,
          forHowLong: 8000
        },
        description: 'Our monkey constantly keeps the CPU busy (without blocking the event loop)',
        lastHappened: new Date(),
        expectations: 'Your monitoring system should notify',
        reality: 'This feature is not implemented yet',
        success: 'No'
      },
      {
        name: "blocked-event-loop",
        friendlyName: "Blocked event loop",
        file: "blocked-event-loop",
        active: true,
        properties: {},
        schedule: {
          type: "peaks",
          sleepTimeBetweenPeaksInMS: 3000,
          pickLengthInMS: 10000,
          forHowLong: 8000
        },
        description: 'Our monkey constantly blocks the event loop',
        lastHappened: new Date(),
        expectations: 'Your monitoring system should notify',
        reality: 'This feature is not implemented yet',
        success: 'No'
      },
      {
        name: "broken-http-integration",
        friendlyName: "Broken Integration",
        file: "broken-http-integration",
        active: true,
        properties: {},
        schedule: {
          type: "peaks",
          sleepTimeBetweenPeaksInMS: 3000,
          pickLengthInMS: 10000,
          forHowLong: 8000
        },
        description: 'Our monkey intercepts HTTP calls and return random HTTP erros on their behalf',
        lastHappened: new Date(),
        expectations: 'Your monitoring system should notify, code should find alternate routes to achieve a decent UX',
        reality: 'This feature is not implemented yet',
        success: 'No'
      }
  ];

  return result;
}

startPrankActivity(prankConfig, prankParams) {
  if (prankConfig.active === false) {
    console.info(`Prank ${prankConfig.name} is not active so not starting`);
    return;
  }

  console.info(
    `Chaos control is about to start the Prank ${prankConfig.name}`
  );

  const PrankClass = require(`../pranks/${prankConfig.file}`);
  console.log(PrankClass);
  const PrankSchedule = this.getPrankSchedule(prankConfig);
  const prankToStart = new PrankClass(
    prankConfig,
    PrankSchedule,
    ...prankParams
  );
  PrankSchedule.start();
}

startAllConfigurationPranks(prankParams) {
  this.configuration.pranks
    .filter(prank => prank.active === true)
    .forEach(prankConfiguration => {
      this.startPrankActivity(prankConfiguration, prankParams);
    });
}
}

module.exports = ChaosControl;