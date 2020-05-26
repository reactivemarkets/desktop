import { Router } from "express";
import { v4 as uuid } from "uuid";
import { wsRouter } from "../router";

const router = Router();

router.ws("/", (ws) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ws.id = uuid();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    wsRouter(ws);
});

export const wsRoutes: Router = router;
