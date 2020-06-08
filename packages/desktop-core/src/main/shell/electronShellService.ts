import { shell } from "electron";
import { IShellService } from "./iShellService";

export class ElectronShellService implements IShellService {
    public openExternal(url: string): Promise<void> {
        return shell.openExternal(url);
    }
}
