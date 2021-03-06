import * as express from 'express';
import * as bodyparse from 'body-parser';

import Database from './db';
import Controller from './controller';

class App {

    public app: express.Application;
    private databsae: Database;
    private controller: Controller;

    constructor() {
        this.app = express();
        this.app.use(bodyparse.json());
        this.app.use(bodyparse.urlencoded({extended:true}));

        this.databsae = new Database();
        this.databsae.createConnection();

        this.controller = new Controller();

        this.routes();
    }

    routes() {
        this.app.route("/").get((req, res) => res.status(200).json({ "result": "Olá Mundo!!" }));
        this.app.route("/api/crush").get((req, res) => this.controller.select(req, res));
        this.app.route("/api/crush/:id").get((req, res) => this.controller.selectOne(req, res));
        this.app.route("/api/crush/:id").delete((req, res) => this.controller.delete(req, res));
        this.app.route("/api/crush/:id").put((req,res) => this.controller.update(req,res));
        this.app.route("/api/crush").post((req,res)=>this.controller.insert(req,res));
    }
}

export default new App();