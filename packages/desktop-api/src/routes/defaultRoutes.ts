import { Request, Response, Router } from "express";

const documentation_url = "https://desktop.reactivemarkets.com";
const notFound = 404;
const router = Router();

router.get("/", (_: Request, response: Response) => {
    response.status(notFound).json({
        documentation_url,
        message: "see API documentation.",
    });
});

router.get("/health", (_: Request, response: Response) => {
    response.json({
        details: {
            env: process.env,
            path: process.execPath,
            version: process.version,
        },
        status: "pass",
    });
});

router.get("*", (request: Request, response: Response) => {
    response.status(notFound).json({
        documentation_url,
        message: `${request.path} not found.`,
    });
});

export const defaultRoutes: Router = router;
