"use strict";

import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./src/routes/routes";
const router = express.Router();

class server {
  constructor() {
    this.port = process.env.PORT || 3000;
    this.app = express();
    this.server = http.createServer(this.app);
    this.cors = cors();
    this.router = router;
    this.routes;
  }
  appConfig() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  enableCors() {
    this.app.use(this.cors);
  }
  connectToDB() {}
  initRoutes() {
    this.routes = new routes(this.app, this.router).init();
  }
  init() {
    this.enableCors();
    this.connectToDB();
    this.initRoutes();

    this.server.listen(this.port, () => {
      console.log("listen on ", this.server.address().port);
    });
  }
}

let application = new server();

application.init();
