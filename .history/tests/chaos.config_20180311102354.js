module.exports = {
  sideMonkeyPort: 3000,
  pranks: [
    {
      name: "500-error-on-route",
      file: "500-error-on-route",
      active
      properties: {
        urls: ["/api/products", "anyurl"]

      },
      schedule: {
        type: "immediate-schedule",
        delay: 0
      }
    },
    {
      name: "process-exit",
      file: "process-exit",
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
      properties: {
        message: "Uncaught exception was thrown by the chaos monkey"
      },
      schedule: {
        type: "one-time-schedule",
        delay: 9000
      }
    }
  ]
};
