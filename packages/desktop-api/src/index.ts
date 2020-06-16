import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as useragent from "express-useragent";
import * as ws from "express-ws";
import * as helmet from "helmet";
import * as hpp from "hpp";
import * as https from "https";
import * as responseTime from "response-time";
import { options } from "./options";

const { allowedOrigins, blockedOrigins, cert, key, host, port } = options;

const app = express();
ws(app, undefined, {
    wsOptions: {
        verifyClient: ({ origin }: { origin: string }) => {
            if (blockedOrigins.some((o) => o === origin)) {
                return false;
            }

            return allowedOrigins.some((o) => o === origin);
        },
    },
});

// These need to be imported after ws has been added to the app
import { apiRoutes, defaultRoutes, wsRoutes } from "./routes";

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

if (cert === undefined) {
    app.listen(port, host, () => {
        console.log(`api listening on http://${host}:${port}`);
    });
} else {
    https
        .createServer(
            {
                cert,
                key,
            },
            app,
        )
        .listen(port, host, () => {
            console.log(`api listening on https://${host}:${port}`);
        });
}
