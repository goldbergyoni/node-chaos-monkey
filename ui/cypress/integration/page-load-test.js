describe('My First Test', function () {
    it('Does not do much!', function () {
        //Arrange
        cy.server() // enable response stubbing
        cy.route({
            method: 'GET', // Route all GET requests
            url: 'http://localhost:8080/chaos/pranks/definition', // that have a URL that matches '/users/*'
            response: [{
                "name": "500-error-on-route",
                "friendlyName": "API route returns 500 error",
                "file": "500-error-on-route",
                "active": true,
                "properties": [{
                    "name": "url",
                    "description": "Which route should return 500 error",
                    "defaultValue": "/api/products",
                    "type": "string"
                }],
                "schedule": {
                    "type": "immediate-schedule",
                    "fadeOutInMS": 10000
                },
                "description": "Our monkey intercepts HTTP routes and return errors on your behalf",
                "lastHappened": "2019-06-23T14:52:03.404Z",
                "expectations": "Your monitoring system should notify, error should appear in log",
                "reality": "This feature is not implemented yet",
                "success": "Yes"
            }, {
                "name": "Process-exit",
                "friendlyName": "Process exit",
                "file": "process-exit",
                "active": true,
                "properties": [{
                    "name": "exitCode",
                    "description": "What should be the process quit exit code",
                    "defaultValue": 1,
                    "type": "number"
                }],
                "schedule": {
                    "type": "immediate-schedule",
                    "fadeOutInMS": 10000
                },
                "description": "Our monkey kills the process",
                "lastHappened": "2019-06-23T14:52:03.404Z",
                "expectations": "Your monitoring system should notify, a new process should be instantiated",
                "reality": "This feature is not implemented yet",
                "success": "No"
            }, {
                "name": "uncaught-exception",
                "friendlyName": "Uncaught exception",
                "file": "uncaught-exception",
                "active": true,
                "properties": [{
                    "name": "message",
                    "Description": "What message should the error include",
                    "defaultValue": "Uncaught exception was thrown by the chaos monkey",
                    "type": "string"
                }],
                "schedule": {
                    "type": "one-time-schedule",
                    "delay": 12000
                },
                "description": "Our monkey Throws an uncaught exception into the void",
                "lastHappened": "2019-06-23T14:52:03.404Z",
                "expectations": "Your monitoring system should notify, process should stay alive or new one should get instantiated",
                "reality": "This feature is not implemented yet",
                "success": "No"
            }, {
                "name": "unhandled-rejection",
                "friendlyName": "Unhandled promise rejection",
                "file": "unhandled-rejection",
                "active": true,
                "properties": [{
                    "name": "message",
                    "Description": "What message should the error include",
                    "defaultValue": "Uncaught exception was thrown by the chaos monkey",
                    "type": "string"
                }],
                "schedule": {
                    "type": "one-time-schedule",
                    "delay": 10000
                },
                "description": "Our monkey Throws an uncaught promise rejection into the void",
                "lastHappened": "2019-06-23T14:52:03.404Z",
                "expectations": "Your monitoring system should notify, process should stay alive or new one should get instantiated",
                "reality": "This feature is not implemented yet",
                "success": "No"
            }, {
                "name": "memory-load",
                "friendlyName": "Memory is overloaded",
                "file": "memory-load",
                "active": true,
                "properties": [{
                    "name": "maxMemorySizeInMB",
                    "Description": "How much memory should be used by the chaos monkey",
                    "defaultValue": 2000,
                    "type": "number"
                }],
                "schedule": {
                    "type": "one-time-schedule",
                    "delay": 1000,
                    "fadeOutInMS": 30000
                },
                "description": "Our monkey constantly increases the RAM, if no limit was specified the entire allowed 1.7GB will be used",
                "lastHappened": "2019-06-23T14:52:03.404Z",
                "expectations": "Your monitoring system should notify",
                "reality": "This feature is not implemented yet",
                "success": "No"
            }, {
                "name": "cpu-load",
                "friendlyName": "Busy CPU",
                "file": "cpu-load",
                "active": true,
                "properties": {},
                "schedule": {
                    "type": "peaks",
                    "sleepTimeBetweenPeaksInMS": 3000,
                    "pickLengthInMS": 10000,
                    "forHowLong": 8000
                },
                "description": "Our monkey constantly keeps the CPU busy (without blocking the event loop)",
                "lastHappened": "2019-06-23T14:52:03.404Z",
                "expectations": "Your monitoring system should notify",
                "reality": "This feature is not implemented yet",
                "success": "No"
            }, {
                "name": "blocked-event-loop",
                "friendlyName": "Blocked event loop",
                "file": "blocked-event-loop",
                "active": true,
                "properties": {},
                "schedule": {
                    "type": "peaks",
                    "sleepTimeBetweenPeaksInMS": 3000,
                    "pickLengthInMS": 10000,
                    "forHowLong": 8000
                },
                "description": "Our monkey constantly blocks the event loop",
                "lastHappened": "2019-06-23T14:52:03.404Z",
                "expectations": "Your monitoring system should notify",
                "reality": "This feature is not implemented yet",
                "success": "No"
            }, {
                "name": "broken-http-integration",
                "friendlyName": "Broken Integration",
                "file": "broken-http-integration",
                "active": true,
                "properties": [{
                    "name": "url",
                    "Description": "What is the URL of the external service that should be mocked",
                    "defaultValue": "http://localhost/otherservice/",
                    "type": "string"
                }, {
                    "name": "httpStatus",
                    "Description": "What HTTP status should the mocked URL return",
                    "defaultValue": "500",
                    "type": "number"
                }],
                "schedule": {
                    "type": "peaks",
                    "sleepTimeBetweenPeaksInMS": 3000,
                    "pickLengthInMS": 10000,
                    "forHowLong": 8000
                },
                "description": "Our monkey intercepts HTTP calls and return random HTTP erros on their behalf",
                "lastHappened": "2019-06-23T14:52:03.404Z",
                "expectations": "Your monitoring system should notify, code should find alternate routes to achieve a decent UX",
                "reality": "This feature is not implemented yet",
                "success": "No"
            }] // and force the response to be: []
        })


        //Act
        cy.visit('http://localhost:3000/chaos_test');

        //Assert
        cy.get('[data-prank-select-button=true]').click()
    })
})