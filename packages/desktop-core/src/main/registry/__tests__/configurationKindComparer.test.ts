import { WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";
import { configurationKindComparer } from "../configurationKindComparer";

describe("compare", () => {
    test.each`
        a                                                       | b                                                       | expected
        ${WellKnownConfigurationKind.Storage}                   | ${WellKnownConfigurationKind.Application}               | ${-1}
        ${WellKnownConfigurationKind.Storage}                   | ${WellKnownConfigurationKind.Service}                   | ${-1}
        ${WellKnownConfigurationKind.Storage}                   | ${WellKnownConfigurationKind.Session}                   | ${-1}
        ${WellKnownConfigurationKind.Application}               | ${WellKnownConfigurationKind.Storage}                   | ${1}
        ${WellKnownConfigurationKind.Service}                   | ${WellKnownConfigurationKind.Storage}                   | ${1}
        ${WellKnownConfigurationKind.Session}                   | ${WellKnownConfigurationKind.Storage}                   | ${1}
        ${WellKnownConfigurationKind.ApplicationSecurityPolicy} | ${WellKnownConfigurationKind.Application}               | ${-1}
        ${WellKnownConfigurationKind.Application}               | ${WellKnownConfigurationKind.ApplicationSecurityPolicy} | ${1}
        ${WellKnownConfigurationKind.ServiceSecurityPolicy}     | ${WellKnownConfigurationKind.Service}                   | ${-1}
        ${WellKnownConfigurationKind.Service}                   | ${WellKnownConfigurationKind.ServiceSecurityPolicy}     | ${1}
        ${WellKnownConfigurationKind.ExternalSecurityPolicy}    | ${WellKnownConfigurationKind.External}                  | ${-1}
        ${WellKnownConfigurationKind.External}                  | ${WellKnownConfigurationKind.ExternalSecurityPolicy}    | ${1}
        ${WellKnownConfigurationKind.Session}                   | ${WellKnownConfigurationKind.Service}                   | ${-1}
        ${WellKnownConfigurationKind.Service}                   | ${WellKnownConfigurationKind.Session}                   | ${1}
        ${WellKnownConfigurationKind.Application}               | ${WellKnownConfigurationKind.Session}                   | ${1}
        ${WellKnownConfigurationKind.External}                  | ${WellKnownConfigurationKind.Session}                   | ${1}
        ${WellKnownConfigurationKind.External}                  | ${WellKnownConfigurationKind.Service}                   | ${1}
        ${WellKnownConfigurationKind.Application}               | ${WellKnownConfigurationKind.Service}                   | ${1}
        ${WellKnownConfigurationKind.Service}                   | ${WellKnownConfigurationKind.Application}               | ${-1}
        ${WellKnownConfigurationKind.Application}               | ${WellKnownConfigurationKind.External}                  | ${-1}
        ${WellKnownConfigurationKind.External}                  | ${WellKnownConfigurationKind.Application}               | ${1}
        ${WellKnownConfigurationKind.Application}               | ${WellKnownConfigurationKind.Application}               | ${0}
        ${WellKnownConfigurationKind.External}                  | ${WellKnownConfigurationKind.External}                  | ${0}
        ${"unknown1"}                                           | ${"unknown2"}                                           | ${-1}
        ${"unknown2"}                                           | ${"unknown1"}                                           | ${1}
        ${"unknown"}                                            | ${"unknown"}                                            | ${0}
    `("should sort session, service, application, external. comparing $a $b", ({ a, b, expected }) => {
        const sort = configurationKindComparer(a, b);

        expect(sort).toBe(expected);
    });
});
