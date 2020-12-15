import { WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";

export const configurationKindComparer = (a: string, b: string): number => {
    if (a === b) {
        return 0;
    }

    if (a === WellKnownConfigurationKind.ApplicationSecurityPolicy) {
        return -1;
    }

    if (b === WellKnownConfigurationKind.ApplicationSecurityPolicy) {
        return 1;
    }

    if (a === WellKnownConfigurationKind.ServiceSecurityPolicy) {
        return -1;
    }

    if (b === WellKnownConfigurationKind.ServiceSecurityPolicy) {
        return 1;
    }

    if (a === WellKnownConfigurationKind.ExternalSecurityPolicy) {
        return -1;
    }

    if (b === WellKnownConfigurationKind.ExternalSecurityPolicy) {
        return 1;
    }

    if (a === WellKnownConfigurationKind.Session) {
        return -1;
    }

    if (b === WellKnownConfigurationKind.Session) {
        return 1;
    }

    if (a === WellKnownConfigurationKind.Service) {
        return -1;
    }

    if (b === WellKnownConfigurationKind.Service) {
        return 1;
    }

    if (a === WellKnownConfigurationKind.Application) {
        return -1;
    }

    if (b === WellKnownConfigurationKind.Application) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 1;
};
