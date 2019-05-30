import { CompositeConfigurationWriter } from "../../../src/configuration/writers/compositeConfigurationWriter";

describe("canWrite", () => {

    describe("can write", () => {

        test("when 1 writer can", () => {
            const canWrite = jest.fn(() => ({
                canWrite: jest.fn(() => true),
                write: jest.fn(),
            }));

            const jsonWriter = new canWrite();

            const writer = new CompositeConfigurationWriter(jsonWriter);

            expect(writer.canWrite("file.json"))
                .toBe(true);
        });

        test("when at least 1 writer can", () => {
            const cantWrite = jest.fn(() => ({
                canWrite: jest.fn(() => false),
                write: jest.fn(),
            }));

            const yamlWriter = new cantWrite();

            const canWrite = jest.fn(() => ({
                canWrite: jest.fn(() => true),
                write: jest.fn(),
            }));

            const jsonWriter = new canWrite();

            const writer = new CompositeConfigurationWriter(yamlWriter, jsonWriter);

            expect(writer.canWrite("file.json"))
                .toBe(true);
        });
    });

    describe("can't write", () => {

        test("when all writers can't", () => {
            const cantWrite = jest.fn(() => ({
                canWrite: jest.fn(() => false),
                write: jest.fn(),
            }));

            const yamlWriter = new cantWrite();

            const canWrite = jest.fn(() => ({
                canWrite: jest.fn(() => false),
                write: jest.fn(),
            }));

            const jsonWriter = new canWrite();

            const writer = new CompositeConfigurationWriter(yamlWriter, jsonWriter);

            expect(writer.canWrite("file.json"))
                .toBe(false);
        });
    });
});
