import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_: Request, response: Response) => {
    response
        .json({
            env: process.env,
            name: "api",
            path: process.execPath,
            version: process.version,
        });
});

export const apiRoute: Router = router;
