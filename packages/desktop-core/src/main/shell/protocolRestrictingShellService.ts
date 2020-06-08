import { IShellService } from "./iShellService";

export class ProtocolRestrictingShellService implements IShellService {
    private readonly shellService: IShellService;
    private readonly allowedProtocols: string[];

    public constructor(shellService: IShellService, allowedProtocols: string[]) {
        this.shellService = shellService;
        this.allowedProtocols = allowedProtocols;
    }

    public openExternal(url: string) {
        const allowed = this.allowedProtocols.some((p) => url.startsWith(p));
        if (allowed) {
            return this.shellService.openExternal(url);
        }

        const error = new Error(`The url: ${url} is not an approved protocol.`);

        return Promise.reject(error);
    }
}
