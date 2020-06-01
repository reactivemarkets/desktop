import { ConfigurationKind } from "@reactivemarkets/desktop-types";
import { configurationKindComparer } from "../configurationKindComparer";

describe("compare", () => {
    test.each`
        a                                | b                                | expected
        ${ConfigurationKind.Session}     | ${ConfigurationKind.Service}     | ${-1}
        ${ConfigurationKind.Service}     | ${ConfigurationKind.Session}     | ${1}
        ${ConfigurationKind.Application} | ${ConfigurationKind.Session}     | ${1}
        ${ConfigurationKind.External}    | ${ConfigurationKind.Session}     | ${1}
        ${ConfigurationKind.External}    | ${ConfigurationKind.Service}     | ${1}
        ${ConfigurationKind.Application} | ${ConfigurationKind.Service}     | ${1}
        ${ConfigurationKind.Service}     | ${ConfigurationKind.Application} | ${-1}
        ${ConfigurationKind.Application} | ${ConfigurationKind.External}    | ${-1}
        ${ConfigurationKind.External}    | ${ConfigurationKind.Application} | ${1}
        ${ConfigurationKind.Application} | ${ConfigurationKind.Application} | ${0}
        ${ConfigurationKind.External}    | ${ConfigurationKind.External}    | ${0}
        ${"unknown1"}                    | ${"unknown2"}                    | ${0}
    `("should sort session, service, application, external", ({ a, b, expected }) => {
        const sort = configurationKindComparer(a, b);

        expect(sort).toBe(expected);
    });
});
