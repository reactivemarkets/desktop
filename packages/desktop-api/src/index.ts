import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as http from "http";
import * as responseTime from "response-time";
import * as socketio from "socket.io";

import { router } from "./router";
import { apiRoute, defaultRoute } from "./routes";

const defaultAcceptedOrigins = "*.*";
const defaultApiPrefix = "/api/v1";
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

const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(responseTime());
app.use(defaultApiPrefix, apiRoute);
app.use("/", defaultRoute);

const options: socketio.ServerOptions = {
    origins: defaultAcceptedOrigins,
    path: `${defaultApiPrefix}/router`,
    serveClient: false,
};
const server = http.createServer(app);
const io = socketio(server, options)
    .of("/");

io.on("connect", (socket) => {
    router(io, socket);
});

server.listen(port, host, async () => {
    console.log(`api listening on http://${host}:${port}${defaultApiPrefix}`);

    return Promise.resolve();
});
