import './util/module-alias';
import { Server } from '@overnightjs/core';
// import { Application } from 'express';
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express-serve-static-core';
// import * as http from 'http';


export class SetupServer extends Server {
    constructor(private port = 3000){
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupControllers();
        this.getApps();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const forecastController = new ForecastController();
        this.addControllers([forecastController]);
    }

    public getApps(): Application {
        return this.app;
    }


}