import { Request, Response, Router } from "express";

const router = Router();

router.get("/api", (_: Request, response: Response) => {
    response.json({
        env: process.env,
        name: "api",
        path: process.execPath,
        version: process.version,
    });
});

export const apiRoutes: Router = router;
