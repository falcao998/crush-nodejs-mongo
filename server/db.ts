import * as mongoose from 'mongoose';

class DataBase {

    private dburl = "mongodb://127.0.0.1/crushes";
    private dbconnection;

    constructor() {

    }

    createConnection() {
        mongoose.connect(this.dburl);
        this.logger(this.dburl);
    }

    logger(uri) {
        this.dbconnection = mongoose.connection;
        this.dbconnection.on("connected", () => console.log("Banco de Dados conectado."));
        this.dbconnection.on("error", (error) => console.error.bind("Erro na conexão ao banco de dados - " + error));
    }
}

export default DataBase;