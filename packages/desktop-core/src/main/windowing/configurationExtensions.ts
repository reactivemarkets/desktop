import { IConfiguration, IApplicationStatus } from "@reactivemarkets/desktop-types";

export const updateStatus = (configuration: IConfiguration, status: Partial<IApplicationStatus>) => {
    return {
        ...configuration,
        status: {
            ...configuration.status,
            ...status,
        },
    };
};
