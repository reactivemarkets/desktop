import { workspaceService } from "../../workspaces";
import { logger } from "../../logging";

export const restoreWorkspaces = async () => {
    try {
        await workspaceService.restore();

        const { current } = workspaceService;

        return current?.instances;
    } catch (error) {
        logger.error(`Failed to restore workspaces: ${error}`);
    }
};
