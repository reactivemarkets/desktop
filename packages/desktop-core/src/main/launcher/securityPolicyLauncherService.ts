import { IConfiguration, WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";
import { ILauncherService } from "./iLauncherService";

export class SecurityPolicyLauncherService implements ILauncherService {
    public canLaunch = ({ kind }: IConfiguration) => {
        return (
            kind === WellKnownConfigurationKind.ApplicationSecurityPolicy ||
            kind === WellKnownConfigurationKind.ExternalSecurityPolicy ||
            kind === WellKnownConfigurationKind.ServiceSecurityPolicy
        );
    };

    public launch(configuration: IConfiguration) {
        return Promise.resolve(configuration);
    }
}
