module.exports = {
  sideMonkeyPort: 3000,
  startMode: "config", //config, passive (for API calls)
  pranks: [
    {
      name: "500-error-on-route",
      file: "500-error-on-route",
      active: true,
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
        type: "one-time-schedule",
        delay: 180000
      }
    },
    {
      name: "uncaught-exception",
      file: "uncaught-exception",
      active: true,
      properties: {
        message: "Uncaught exception was thrown by the chaos monkey"
      },
      schedule: {
        type: "one-time-schedule",
        delay: 60000
      }
    },
    {
      name: "uncaught-rejection",
      file: "uncaught-rejection",
      active: true,
      properties: {
        message: "Uncaught rejection was thrown by the chaos monkey"
      },
      schedule: {
        type: "one-time-schedule",
        delay: 60000
      }
    },
    {
      name: "memory-load",
      file: "memory-load",
      active: true,
      properties: {
        maxMemorySizeInMB: 10
      },
      schedule: {
        type: "one-time-schedule",
        delay: 90000,
        fadeOutInMS: 30000
      }
    },
    {
      name: "cpu-load",
      file: "cpu-load",
      active: true,
      properties: {},
      schedule: {
        type: "peaks",
        sleepTimeBetweenPeaksInMS: 2000,
        pickLengthInMS: 10000,
        forHowLong: 45000
      }
    }
  ]
};
