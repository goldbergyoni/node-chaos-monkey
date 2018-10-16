<h1 align="center">
  <img src="misc/chaos-monkey.png" alt="Chaos Monkey" />
</h1>

## Random & crazy pranks to check your app resiliency

**Installation**

npm install chaos-monkey

**Import and initialize**

Require this package at the very beginning of your app, before registering other routes

```javascript
const ChaosMonkey = require('chaos-monkey');
new ChaosMonkey(app, require('./chaos.config') ).start();
```

**Activate**

You may start doing pranks using two methods:

1. **Configuration**
Provide the following config file to the constructor 
Example:
```javascript
module.exports = {
  sideMonkeyPort: 3000,
  startMode: "passive", //config, passive (for API calls)
  pranks: [{
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
      active: false,
      properties: {
        exitCode: 1
      },
      schedule: {
        type: "one-time-schedule",
        delay: 60000
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
      active: true,
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
  ]
};
```
2. *API calls*
Perform POST call to ~server/chaos/pranks providing any prank configuration object, for example:
```
{"name":"uncaught-exception","file":"uncaught-exception","active":true,"properties":{"message":"Uncaught exception was thrown by the chaos monkey"},"schedule":{"type":"one-time-schedule","delay":2000}}
```

**API usage**

***Start the API***
Just run 'npm start' or 'npm run start:dev' (to get live reload with nodemon)

***Routes***
1. Get list of available pranks

Method: GET

Address: http://localhost:8081/chaos/pranks-pool

Sent body: Empty

Return:
`[
    {
        "name": "500-error-on-route",
        "file": "500-error-on-route",
        "active": false,
        "properties": {
            "urls": [
                "/api/products",
                "/anyurl"
            ]
        },
        "schedule": {
            "type": "immediate-schedule",
            "fadeOutInMS": 10000
        }
    }
]
`

2. Activate a prank

Method: POST

Address: http://localhost:8081/chaos/pranks-activity

Sent body: 
`
{
      "name": "500-error-on-route",
      "file": "500-error-on-route",
      "active": false,
      "properties": {
        "urls": ["/api/products", "/anyurl"]
      },
      "schedule": {
        "type": "immediate-schedule",
        "fadeOutInMS": 10000
      }
}

    
`
Return:
`
`

3. Web socket: subscribe to prank

Method: WS

Address: http://localhost:8081

Event schema:

`
{name: '500-error-on-route', friendlyName: 'API returned a 500 status error', 
  description: 'Our monkey intercepts HTTP routes and return errors on your behalf', lastHappened: new Date(),
  expectations: 'Your monitoring system should notify, error should appear in log',
  reality: 'The process has crashed',
  success: 'Yes' }
`

Example:
`
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
    <Script>
        var socket = io('http://localhost:8081');
        var isOkToEmit = true;

        console.log('after')
        socket.on('new-prank-activity', function (data) {
            console.log(`A new prank just ran ${data}`);
        });
    </Script>
    `
