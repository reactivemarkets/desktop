import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as useragent from "express-useragent";
import * as ws from "express-ws";
import * as helmet from "helmet";
import * as hpp from "hpp";
import * as responseTime from "response-time";

const app = express();
ws(app);

import { apiRoutes, defaultRoutes, wsRoutes } from "./routes";

const defaultPort = 8282;
const defaultHost = "localhost";

let host = process.env.API_HOST;
if (host === undefined) {
    host = defaultHost;
}

let port = Number(process.env.API_PORT);
if (Number.isNaN(port)) {
    port = defaultPort;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(useragent.express());
app.use(compression());
app.use(responseTime());
app.use(apiRoutes);
app.use(wsRoutes);
app.use(defaultRoutes);
app.listen(port, host, () => {
    console.log(`api listening on http://${host}:${port}`);
});
