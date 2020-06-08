import { ElectronShellService } from "./electronShellService";
import { ProtocolRestrictingShellService } from "./protocolRestrictingShellService";

const electronShellService = new ElectronShellService();

const approvedProtocols = ["https://", "mailto://"];

export const shellService = new ProtocolRestrictingShellService(electronShellService, approvedProtocols);
export * from "./iShellService";
