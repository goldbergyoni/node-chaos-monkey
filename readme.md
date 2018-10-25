<h1 align="center">
  <img src="misc/chaos-monkey.png" alt="Chaos Monkey" />
</h1>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Build%20-%20Passing-blue.svg" alt="74 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Coverage%20-%2076-green.svg" alt="Last update: October 7th, 2018"> <img src="https://img.shields.io/badge/%E2%9C%94%20Pranks%20%20-%209%20Items-brightgreen.svg" alt="Updated for Node 8.11.3 LTS">
</div>

<br/>

# Extremly naughty chaos monkey to check your Node app resilliency


# 1 min start (limited functionality)
### Great for quick experiments, some pranks (damage) won't be available

A. **Install:** `npm install node-chaos-monkey`

B. **Add a flag to start command:** `node -r node-chaos-monkey {your start file.js}`

C. **Trigger chaos using API or UI**: 
- Browse to `http/s://{host}/chaos` and trigger some chaos
- Invoke the API `POST: http/s://{host}/chaos/random`

This will trigger a random chaos, multiple pranks will get executed (e.g. memory overload, uncaught exceptions). Follow the log or the UI to see whatg happened and whether your app stayed resillience

# 5 min start (full functionality)
A. **Install:** `npm install node-chaos-monkey`

B. **Add a reference in your code:** 

Require this package at the very beginning of your app, before registering other routes

```javascript
const ChaosMonkey = require('chaos-monkey');
//pass in a referrence to express app so the monkey can generate damage also within Express routes. This param is optional //but without it some pranks won't be available
new ChaosMonkey(your-express-app).start();
```

C. **Trigger chaos using API or UI**: 
- Browse to `http/s://{host}/chaos` and trigger some chaos
- Invoke the API `POST: http/s://{host}/chaos/random`




# API and full documentation
***1. Get list of available pranks***

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

***2. Activate a prank***

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

***3. Web socket: subscribe to prank***

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
