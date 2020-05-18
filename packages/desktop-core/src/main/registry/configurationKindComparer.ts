import { ConfigurationKind } from "../configuration";

export const configurationKindComparer = (a: ConfigurationKind, b: ConfigurationKind): number => {
    if (a === b) {
        return 0;
    }

    if (a === ConfigurationKind.Session) {
        return -1;
    }

    if (b === ConfigurationKind.Session) {
        return 1;
    }

    if (a === ConfigurationKind.Service) {
        return -1;
    }

    if (b === ConfigurationKind.Service) {
        return 1;
    }

    if (a === ConfigurationKind.Application) {
        return -1;
    }

    if (b === ConfigurationKind.Application) {
        return 1;
    }

    return 0;
};
