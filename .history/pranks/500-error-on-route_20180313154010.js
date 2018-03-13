const PrankBase = require("./prank-base");
const removeRoute = require('express-remove-route');
class Route500ErrorSin extends PrankBase {
  constructor() {
    super(...arguments);
  }

  start() {
    this.active = true;
    this.context.configuration.properties.urls.forEach(url => {
      console.log(`500 error route is about to register the url ${url}`);
      removeRoute(this.context.expressApp, '/foo/remove/me');
      this.context.expressApp.use(url, (req, res, next) => {
        console.log(this.active)
        if (this.active === true) {
          console.log(`Prank: About to answer with 500 status`);
          res.status(500).end();
          this.emit("sinOccured", this.context.configuration);
        }
        else{
          next();
        }
      });
    });
  }

  stop() {
    this.active = false;
  }
}

module.exports = Route500ErrorSin;