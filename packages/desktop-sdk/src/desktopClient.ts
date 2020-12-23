/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IDesktop } from "./iDesktop";
import { SystemEvents } from "./systemEvents";

export class DesktopClient implements IDesktop {
    public get api() {
        // @ts-ignore
        return desktop;
    }

    public get isHostedInDesktop() {
        // @ts-ignore
        return typeof desktop !== "undefined";
    }

    public focus() {
        return this.api.system.focus();
    }

    public getAppName() {
        return this.api.system.getAppName();
    }

    public getAppVersion() {
        return this.api.system.getAppVersion();
    }

    public getVersions() {
        return this.api.system.getVersions();
    }

    public off(event: SystemEvents, listener: () => void) {
        this.api.system.off(event, listener);
    }

    public on(event: SystemEvents, listener: () => void) {
        this.api.system.on(event, listener);
    }

    public quit() {
        return this.api.system.quit();
    }

    public showAboutPanel() {
        return this.api.system.showAboutPanel();
    }
}
