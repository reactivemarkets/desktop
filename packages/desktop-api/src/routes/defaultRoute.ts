import { Request, Response, Router } from "express";

const notFound = 404;
const router = Router();

router.get("/", (_: Request, response: Response) => {
    response
        .json({
            message: "See https://desktop.reactivemarkets.com for API documentation.",
        });
});

router.get("/health", (_: Request, response: Response) => {
    response
        .json({
            status: "pass",
        });
});

router.get("*", (request: Request, response: Response) => {
    response
        .status(notFound)
        .json({
            message: `${request.path} not found.`,
        });
});

export const defaultRoute: Router = router;
