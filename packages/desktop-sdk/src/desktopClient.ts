/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IDesktop } from "./iDesktop";

export class DesktopClient implements IDesktop {
    public get api() {
        // @ts-ignore
        return desktop;
    }

    public get isHostedInDesktop() {
        // @ts-ignore
        return typeof desktop !== "undefined";
    }

    public quit() {
        return this.api.system.quit();
    }

    public showAboutPanel() {
        return this.api.system.showAboutPanel();
    }
}
