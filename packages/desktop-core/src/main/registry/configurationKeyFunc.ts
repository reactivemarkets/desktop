import { IConfiguration, WellKnownNamespace } from "@reactivemarkets/desktop-types";

export const configurationKeyFunc = (configuration: IConfiguration) => {
    const { kind } = configuration;

    const { namespace = WellKnownNamespace.default, name } = configuration.metadata;

    return `${kind}/${namespace}/${name}`;
};
