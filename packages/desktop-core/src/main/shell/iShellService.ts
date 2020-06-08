export interface IShellService {
    openExternal(url: string): Promise<void>;
}
