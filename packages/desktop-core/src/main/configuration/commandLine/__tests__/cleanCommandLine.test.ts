import { cleanCommandLine, urlToCommandLine } from "../cleanCommandLine";

describe("cleanCommandLine", () => {
    describe("should remove", () => {
        test("exe when present", () => {
            const args = ["electron.exe", "-c", "application.yaml"];

            expect(cleanCommandLine(args)).toEqual(["-c", "application.yaml"]);
        });

        test("index.js when present", () => {
            const args = ["electron.exe", "index.js", "-c", "application.yaml"];

            expect(cleanCommandLine(args)).toEqual(["-c", "application.yaml"]);
        });

        test("allow file access when present", () => {
            const args = ["electron.exe", "--allow-file-access-from-files", "-c", "application.yaml"];

            expect(cleanCommandLine(args)).toEqual(["-c", "application.yaml"]);
        });
    });

    describe("should replace", () => {
        test("command line with desktop args when present", () => {
            const args = ["desktop://open?config=application.yaml"];

            expect(cleanCommandLine(args)).toEqual(["open", "--config=application.yaml"]);
        });

        test("command line with desktop args when 2nd argument", () => {
            const args = ["electron.exe", "desktop://open?config=application.yaml"];

            expect(cleanCommandLine(args)).toEqual(["open", "--config=application.yaml"]);
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
