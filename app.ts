import * as express from 'express';
import * as bodyParser from 'body-parser'

import { UserRoute } from './routes/user.router';

/**
 * The server.
 *
 * @class Server
 */
class App {

    public app: express.Application;

    public userRoutes: UserRoute = new UserRoute();

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        this.app = express();
        this.config();
        this.mountRoutes();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    // Configure API endpoints.
    private mountRoutes(): void {
        this.userRoutes.routes(this.app);
    }
}

export default new App().app;