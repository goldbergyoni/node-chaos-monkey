const express = require('express');
const ChaosControl = require("../chaos-control");
const PranksDefinition = require('../pranks/pranks-definition');
const bodyParser = require('body-parser')
const util = require('util');
var cors = require('cors');
const path = require('path');
const publicPath = path.join('ui', 'build');

class API {
  constructor(expressApp) {
    console.log('Chaos API is about to register routes, websockets and listen')
    const router = express.Router();
    this.registerMiddlewares(expressApp);
    expressApp.use('/chaos', router);
    this.listenToRoutes(router);
    this.registerWebSockets();
    this.ChaosControl = new ChaosControl(expressApp);
  }

  registerMiddlewares(expressApp) {
    expressApp.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    expressApp.use(cors());
    expressApp.options(cors());
    expressApp.use(express.static(publicPath));
    expressApp.use(bodyParser.json())
  }

  listenToRoutes(router) {
    router.post("/pranks/execute", (req, res) => {
      try {
        console.log(`Chaos gate was asked to start a new prank activity ${util.inspect(req.body)}`);
        this.ChaosControl.startPrankExecution(req.body);
        res.status(200).json({
          status: "OK"
        });
      } catch (e) {
        console.log(e);
        res.status(500).json(e);
      }
    });

    router.get("/pranks/definition", (req, res) => {
      try {
        console.log(`Chaos gate was asked to get all pranks definition`);
        const result = new PranksDefinition().getAll
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json(e);
      }
    });

    
  }

  registerWebSockets() {
    const http = require('http');

    const server = http.createServer((req, res) => {
      console.log('Web socket connection was called with a plain HTTP request, hmmm')
    });

    const webSocketConnection = require('socket.io').listen(server);
    //TODO: allow the user to determine the websocket port
    server.listen(9090);

    webSocketConnection.on('error', (error) => {
      console.log(error);
    });
    webSocketConnection.on('connection', (socket) => {
      console.log('a user connected');

      const prankActivity = new PranksDefinition().getAll();

      setInterval(() => {
        console.log('Emitting prank activity');
        const prankToEmit = prankActivity[Math.ceil(Math.random() * prankActivity.length - 1)];
        if (prankToEmit.name === "blocked-event-loop" || prankToEmit.name === "memory-load" || prankToEmit.name === "uncaught-exception" || prankToEmit.name === "cpu-load") {
          socket.broadcast.emit('new-prank-activity', prankToEmit);
        }
      }, 1000);


      socket.on('disconnect', function () {
        console.log('user disconnected');
      });
    });
  }
}

module.exports = API;