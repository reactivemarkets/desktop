import { WellKnownNamespaces } from "@reactivemarkets/desktop-types";

export const namespaceComparer = (a?: string, b?: string): number => {
    if (a === b) {
        return 0;
    }

    if (a === WellKnownNamespaces.desktop) {
        return -1;
    }

    if (b === WellKnownNamespaces.desktop) {
        return 1;
    }

    if (a === undefined) {
        return -1;
    }

    if (b === undefined) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
};
