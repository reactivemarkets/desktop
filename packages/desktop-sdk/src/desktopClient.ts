/* eslint-disable @typescript-eslint/ban-ts-ignore */
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
}
