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
        file: "500-error-on-route",
        active: false,
        properties: {
          urls: ["/api/products", "/anyurl"]
        },
        schedule: {
          type: "immediate-schedule",
          fadeOutInMS: 10000
        }
      },
      {
        name: "process-exit",
        file: "process-exit",
        active: true,
        properties: {
          exitCode: 1
        },
        schedule: {
          type: "immediate-schedule",
          fadeOutInMS: 10000
        }
      },
      {
        name: "uncaught-exception",
        file: "uncaught-exception",
        active: false,
        properties: {
          message: "Uncaught exception was thrown by the chaos monkey"
        },
        schedule: {
          type: "one-time-schedule",
          delay: 9000
        }
      },
      {
        name: "unhandled-rejection",
        file: "unhandled-rejection",
        active: true,
        properties: {
          message: "Uncaught rejection was thrown by the chaos monkey"
        },
        schedule: {
          type: "one-time-schedule",
          delay: 10000
        }
      },
      {
        name: "memory-load",
        file: "memory-load",
        active: false,
        properties: {
          maxMemorySizeInMB: 10
        },
        schedule: {
          type: "one-time-schedule",
          delay: 1000,
          fadeOutInMS: 30000
        }
      },
      {
        name: "cpu-load",
        file: "cpu-load",
        active: false,
        properties: {},
        schedule: {
          type: "peaks",
          sleepTimeBetweenPeaksInMS: 3000,
          pickLengthInMS: 10000,
          forHowLong: 8000
        }
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