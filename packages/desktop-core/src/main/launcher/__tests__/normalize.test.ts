import { normalizePath, normalizeUrl } from "../normalize";

jest.mock("electron", () => {
    return {
        app: {
            getAppPath: jest.fn().mockReturnValue("/user/app.asar"),
        },
    };
});
jest.mock("path", () => {
    return {
        dirname: jest.fn().mockReturnValue("/user"),
        isAbsolute: jest.fn().mockImplementation((p: string) => {
            return p.startsWith("/");
        }),
        normalize: jest.fn().mockImplementation((p) => {
            return p;
        }),
        join: jest.fn().mockImplementation((...paths: string[]) => {
            return paths.join("/");
        }),
    };
});
jest.mock("url", () => {
    return {
        pathToFileURL: jest.fn().mockImplementation((path: string) => {
            return "file://" + path;
        }),
    };
});

describe("normalize", () => {
    describe("normalizePath", () => {
        test.each`
            url                      | expected
            ${"/user/test/api.asar"} | ${"/user/test/api.asar"}
            ${"api.asar"}            | ${"/user/api.asar"}
        `("should normalize $url to $expected", ({ url, expected }) => {
            const normalized = normalizePath(url);

            expect(normalized).toBe(expected);
        });
    });

    describe("normalizeUrl", () => {
        test.each`
            url                 | expected
            ${"http://random"}  | ${"http://random"}
            ${"https://random"} | ${"https://random"}
            ${"file://random"}  | ${"file://random"}
            ${"dock.asar"}      | ${"file:///user/dock.asar/index.html"}
        `("should normalize $url to $expected", ({ url, expected }) => {
            const normalized = normalizeUrl(url);

            expect(normalized).toBe(expected);
        });
    });
});
