import { cleanCommandLine, urlToCommandLine } from "../cleanCommandLine";

describe("cleanCommandLine", () => {
    describe("should remove", () => {
        test("exe when present", () => {
            const args = ["electron.exe", "-c", "application.yaml"];

            expect(cleanCommandLine(args)).toEqual(["-c", "application.yaml"]);
        });

        test("main.js when present", () => {
            const args = ["electron.exe", "main.js", "-c", "application.yaml"];

            expect(cleanCommandLine(args)).toEqual(["-c", "application.yaml"]);
        });
    });
});

describe("urlToCommandLine", () => {
    test("should split args up", () => {
        const url = "desktop://start?url=www.reactivemarkets.com&url=desktop.reactivemarkets.com";

        const commandLine = urlToCommandLine(url);

        expect(commandLine).toHaveLength(3);
        expect(commandLine[0]).toBe("start");
        expect(commandLine[1]).toBe("--url=www.reactivemarkets.com");
        expect(commandLine[2]).toBe("--url=desktop.reactivemarkets.com");
    });

    test("should still work with other protocols", () => {
        const url = "random://start?url=www.reactivemarkets.com&url=desktop.reactivemarkets.com";

        const commandLine = urlToCommandLine(url);

        expect(commandLine).toHaveLength(3);
        expect(commandLine[0]).toBe("start");
        expect(commandLine[1]).toBe("--url=www.reactivemarkets.com");
        expect(commandLine[2]).toBe("--url=desktop.reactivemarkets.com");
    });

    test("should still work without a protocol", () => {
        const url = "start?url=www.reactivemarkets.com&url=desktop.reactivemarkets.com";

        const commandLine = urlToCommandLine(url);

        expect(commandLine).toHaveLength(3);
        expect(commandLine[0]).toBe("start");
        expect(commandLine[1]).toBe("--url=www.reactivemarkets.com");
        expect(commandLine[2]).toBe("--url=desktop.reactivemarkets.com");
    });
});
