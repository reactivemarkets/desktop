import { mock } from "jest-mock-extended";

import { CompositeConfigurationWriter } from "../compositeConfigurationWriter";
import { IConfigurationWriter } from "../iConfigurationWriter";

describe("canWrite", () => {

    describe("can write", () => {

        test("when 1 writer can", () => {
            const jsonWriter = mock<IConfigurationWriter<any>>();
            jsonWriter.canWrite.mockReturnValue(true);

            const writer = new CompositeConfigurationWriter(jsonWriter);

            expect(writer.canWrite("file.json"))
                .toBe(true);
        });

        test("when at least 1 writer can", () => {
            const yamlWriter = mock<IConfigurationWriter<any>>();
            yamlWriter.canWrite.mockReturnValue(false);

            const jsonWriter = mock<IConfigurationWriter<any>>();
            jsonWriter.canWrite.mockReturnValue(true);

            const writer = new CompositeConfigurationWriter(yamlWriter, jsonWriter);

            expect(writer.canWrite("file.json"))
                .toBe(true);
        });
    });

    describe("can't write", () => {

        test("when all writers can't", () => {
            const yamlWriter = mock<IConfigurationWriter<any>>();
            yamlWriter.canWrite.mockReturnValue(false);

            const jsonWriter = mock<IConfigurationWriter<any>>();
            jsonWriter.canWrite.mockReturnValue(false);

            const writer = new CompositeConfigurationWriter(yamlWriter, jsonWriter);

            expect(writer.canWrite("file.json"))
                .toBe(false);
        });
    });
});
