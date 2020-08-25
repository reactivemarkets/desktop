import { ISessionSpecification } from "@reactivemarkets/desktop-types";
import { session } from "electron";
import { ILogger } from "../logging";
import { ISessionService } from "./iSessionService";

export class DefaultSessionService implements ISessionService {
    private readonly logger: ILogger;

    public constructor(logger: ILogger) {
        this.logger = logger;
    }

    public async configure(spec: ISessionSpecification) {
        const { parameters, partition } = spec;

        const currentSession = partition !== undefined ? session.fromPartition(partition) : session.defaultSession;
        if (currentSession === undefined) {
            const message = "Session not found";

            const error = new Error(message);

            return Promise.reject(error);
        }

        const { downloadPath, ntlmDomains, userAgent } = parameters;
        if (downloadPath !== undefined) {
            this.logger.info(`Setting download path to: ${downloadPath}`);

            currentSession.setDownloadPath(downloadPath);
        }

        if (ntlmDomains !== undefined) {
            const domains = ntlmDomains.join(",");

            this.logger.info(`Setting NTLM domains to: ${domains}`);

            currentSession.allowNTLMCredentialsForDomains(domains);
        }

        if (userAgent !== undefined) {
            this.logger.info(`Setting userAgent to: ${userAgent}`);

            currentSession.setUserAgent(userAgent);
        }

        const { pacScript = "", proxyBypassRules: byPass, proxyRules } = parameters;
        if (proxyRules !== undefined || pacScript !== undefined) {
            let proxyBypassRules = undefined;
            if (byPass !== undefined) {
                proxyBypassRules = byPass.join(",");
            }

            const config = {
                pacScript,
                proxyBypassRules,
                proxyRules,
            };

            await currentSession.setProxy(config);

            this.logger.info(`Proxy configured: ${JSON.stringify(config)}`);
        }

        return Promise.resolve();
    }
}
