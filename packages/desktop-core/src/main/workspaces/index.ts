import { DefaultWorkspaceService } from "./defaultWorkspaceService";
import { storageService } from "../storage";
import { uidGenerator } from "../ids";

export * from "./iWorkspace";
export * from "./iWorkspaceService";
export * from "./wellKnownWorkspaces";

export const workspaceService = new DefaultWorkspaceService(storageService, uidGenerator);
