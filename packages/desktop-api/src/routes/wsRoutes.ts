import { Router } from "express";
import { nanoid } from "nanoid";
import { wsRouter } from "../router";

const router = Router();

router.ws("/", (ws) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ws.id = nanoid();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    wsRouter(ws);
});

export const wsRoutes: Router = router;
