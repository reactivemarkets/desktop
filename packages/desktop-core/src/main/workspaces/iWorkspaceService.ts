import { IWorkspace } from "./iWorkspace";

export interface IWorkspaceService {
    /**
     * Get the current workspace.
     */
    readonly current?: IWorkspace;

    /**
     * Get all current workspaces.
     */
    all(): readonly IWorkspace[];

    /**
     * Create a new workspace.
     */
    create(name?: string): IWorkspace;

    /**
     * Restore all workspaces.
     */
    restore(): Promise<void>;

    /**
     * Switch the current workspace.
     * @param uid The workspace identifier
     */
    switch(uid: string): Promise<void>;
}
