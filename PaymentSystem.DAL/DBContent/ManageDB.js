const mongoose  = require("mongoose");

class ManageDB 
{
    //конструктор принимающий логер с конфигом
    constructor({config, logger}) 
    {
        this.config = config;
        this.logger = logger;
        this.isConnected = false;
    }

    //Открытие конекта к СУБД
    async connect () 
    {
        let credentials = "";

        if(this.config.auth) {
            credentials = `${this.config.user}:${this.config.password}@`;
        }

        const connection = typeof this.config === "string" ?
            this.config : `mongodb://${credentials}${this.config.host}:${this.config.port}/${this.config.database}`;

        const options = this.config.ENV === "prod" ?
            { autoIndex: false } : {};

        this.logger.debug("Connecting to the database...");

        mongoose.set("useCreateIndex", true);
        mongoose.set("useFindAndModify", false);
        mongoose.set("useUnifiedTopology", true);

        await mongoose
            .connect(connection, {useNewUrlParser: true, ...options})
            .catch(error => {
                this.logger.error("Error while connecting to the database", error);
                process.exit(1);
            });

        this.isConnected = true;   
        this.logger.debug("Connected to database");
    }

    //Закрытие конекта к СУБД
    async close() 
    {
        this.logger.debug("Closing database...");

        await mongoose.connection.close().catch(error => {
            this.logger.error("Errorwhile closing the database", error);
            process.exit(1);
        });

        this.isConnected = false;   
        this.logger.debug("Database closed");
    }

}

exports = module.exports = ManageDB;