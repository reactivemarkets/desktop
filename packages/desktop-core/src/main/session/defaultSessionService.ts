import { ISessionConfiguration } from "@reactivemarkets/desktop-types";
import { session } from "electron";
import { ILogger } from "../logging";
import { ISessionService } from "./iSessionService";

export class DefaultSessionService implements ISessionService {
    private readonly logger: ILogger;

    public constructor(logger: ILogger) {
        this.logger = logger;
    }

    public async configure(configuration: ISessionConfiguration) {
        const { defaultSession } = session;
        if (defaultSession === undefined) {
            const message = "Default session was undefined";

            const error = new Error(message);

            return Promise.reject(error);
        }

        const { downloadPath, ntlmDomains, userAgent } = configuration;

        if (downloadPath !== undefined) {
            this.logger.info(`Setting download path to: ${downloadPath}`);

            defaultSession.setDownloadPath(downloadPath);
        }

        if (ntlmDomains !== undefined) {
            const domains = ntlmDomains.join(",");

            this.logger.info(`Setting NTLM domains to: ${domains}`);

            defaultSession.allowNTLMCredentialsForDomains(domains);
        }

        if (userAgent !== undefined) {
            this.logger.info(`Setting userAgent to: ${userAgent}`);

            defaultSession.setUserAgent(userAgent);
        }

        const { pacScript = "", proxyBypassRules = "", proxyRules } = configuration;

        if (proxyRules !== undefined) {
            const config = {
                pacScript,
                proxyBypassRules,
                proxyRules,
            };

            await defaultSession.setProxy(config);

            this.logger.info(`Proxy configured: ${JSON.stringify(config)}`);
        }

        return Promise.resolve();
    }
}
