import { IDesktopWindow } from "./iDesktopWindow";

export interface IDesktopWindowClient {
    current(): IDesktopWindow;
}
