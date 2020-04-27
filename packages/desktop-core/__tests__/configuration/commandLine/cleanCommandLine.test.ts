import { cleanCommandLine } from "../../../src/main/configuration/commandLine/cleanCommandLine";

describe("cleanCommandLine", () => {

    describe("should remove", () => {

        test("exe when present", () => {
            const args = ["electron.exe", "-c", "application.yaml"];

            expect(cleanCommandLine(args))
                .toEqual(["-c", "application.yaml"]);
        });

        test("main.js when present", () => {
            const args = ["electron.exe", "main.js", "-c", "application.yaml"];

            expect(cleanCommandLine(args))
                .toEqual(["-c", "application.yaml"]);
        });
    });
});
