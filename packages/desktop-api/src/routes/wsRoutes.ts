import { Router } from "express";
import { v4 as uuid } from "uuid";
import { wsRouter } from "../router";

const router = Router();

router.ws("/", (ws) => {

    // @ts-ignore
    ws.id = uuid();

    // @ts-ignore
    wsRouter(ws);
});

export const wsRoutes: Router = router;
