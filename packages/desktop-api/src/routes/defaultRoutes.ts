import { Request, Response, Router } from "express";

const notFound = 404;
const router = Router();

router.get("/", (_: Request, response: Response) => {
    response.status(notFound).json({
        documentation_url: "https://desktop.reactivemarkets.com",
        message: "see API documentation.",
    });
});

router.get("/health", (_: Request, response: Response) => {
    response.json({
        status: "pass",
    });
});

router.get("*", (request: Request, response: Response) => {
    response.status(notFound).json({
        documentation_url: "https://desktop.reactivemarkets.com",
        message: `${request.path} not found.`,
    });
});

export const defaultRoutes: Router = router;
