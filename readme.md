<h1 align="center">
  <img src="misc/chaos-monkey.png" alt="Chaos Monkey" />
</h1>

## Random & crazy pranks to check your app resiliency

**Installation**

npm install chaos-monkey

**Usage**

Require this package at the very beginning of your app, before registering other routes

```javascript
const ChaosMonkey = require('chaos-monkey');
new ChaosMonkey(app, require('./chaos.config') ).start();
```

**Configuration**
Example:
```javascript
module.exports = {
  sideMonkeyPort: 3000,
  pranks: [
    {
      name: "500-error-on-route",
      file: "500-error-on-route",
      properties: {
        urls: ["/api/products"]
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

```
