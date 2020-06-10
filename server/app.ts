import * as express from 'express';

import Database from './db';
import Controller from './controller';

class App {
    
    public app: express.Application;
    private databsae: Database;
    private controller: Controller;

    constructor() {
        this.app = express();
        
        this.databsae = new Database();
        this.databsae.createConnection();

        this.controller = new Controller();

        this.routes();
    }

    routes() {
        this.app.route('/')
        .get((req, res) => res.status(200).json({"result":"Olá Mundo!!"}));
        this.app.route("/api/crush").get((req, res) => this.controller.select(req, res));
    }
}

export default new App();