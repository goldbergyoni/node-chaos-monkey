const express = require('express');
const expressApp = express();
const http = require('http').Server(expressApp);
const io = require('socket.io');
const ChaosControl = require("../chaos-control");
const bodyParser = require('body-parser')
const util = require('util');
var cors = require('cors');
const path = require('path');
const publicPath = path.join('ui','build');



const router = express.Router();
expressApp.use(
  bodyParser.urlencoded({
    extended: true
  })
);
expressApp.use(cors());
expressApp.options(cors());
expressApp.use(express.static(publicPath));
expressApp.get('*',(req,res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
});

expressApp.use(bodyParser.json());

http.listen(8081, function () {
  console.log('listening on *:8081')
});

const webSocketConnection = io.listen(http);

router.post("/chaos/pranks-activity", (req, res) => {
  try {
    console.log(`Chaos gate was asked to start a new prank activity ${util.inspect(req.body)}`);
    new ChaosControl().startPrankActivity(req.body, expressApp);
    res.status(200).json({
      status: "OK"
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

router.get("/chaos/pranks-pool", (req, res) => {
  try {
    console.log(`Chaos gate was asked to get all pranks`);
    const result = new ChaosControl().getPranksPool();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

expressApp.use(router);

webSocketConnection.on('error' , (error) =>{
  console.log(error);
});
webSocketConnection.on('connection', (socket) => {
  console.log('a user connected');

  const prankActivity = [];
  prankActivity.push({name: '500-error-on-route', friendlyName: 'API returned a 500 status error', 
  description: 'Our monkey intercepts HTTP routes and return errors on your behalf', lastHappened: new Date(),
  expectations: 'Your monitoring system should notify, error should appear in log',
  reality: 'The process has crashed',
  success: 'Yes' });
  prankActivity.push({name: '500-error-on-route', friendlyName: 'API returned a 500 status error', 
  description: 'Our monkey intercepts HTTP routes and return errors on your behalf', lastHappened: new Date(),
  expectations: 'Your monitoring system should notify, error should appear in log',
  reality: 'The process has crashed',
  success: 'Yes' });
  prankActivity.push({name: '500-error-on-route', friendlyName: 'API returned a 500 status error', 
  description: 'Our monkey intercepts HTTP routes and return errors on your behalf', lastHappened: new Date(),
  expectations: 'Your monitoring system should notify, error should appear in log',
  reality: 'The process has crashed',
  success: 'Yes' });

  setInterval(() => {
    console.log('Emitting prank activity');
    socket.broadcast.emit('new-prank-activity', prankActivity[Math.ceil(Math.random() * prankActivity.length)]);
  } , 5000);
  
  
  socket.on('disconnect', function () {
      console.log('user disconnected');
  });
});