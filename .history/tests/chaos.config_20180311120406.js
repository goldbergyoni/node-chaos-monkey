module.exports = {
  sideMonkeyPort: 3000,
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
        delay: 0
      }
    },
    {
      name: "process-exit",
      file: "process-exit",
      active: false,
      properties: {
        exitCode: 1
      },
      schedule: {
        type: "one-time-schedule",
        delay: 11000
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
      name: "memory-load",
      file: "memory-load",
      active: false,
      properties: {
        maxMemorySizeInMB: 900
      },
      schedule: {
        type: "one-time-schedule",
        delay: 1000
      }
    },
    {
      name: "cpu-load",
      file: "cpu-load",
      active: true,
      properties: {
      },
      schedule: {
        type: "peaks",
        sleepTimeBetweenPeaksInMS: 1000
      }
    }
  ]
};
