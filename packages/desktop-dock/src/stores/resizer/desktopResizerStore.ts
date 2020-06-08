import { desktop, window } from "@reactivemarkets/desktop-sdk";
import { IResizerStore } from "./iResizerStore";

export class DesktopResizerStore implements IResizerStore {
    private readonly collapsedHeight = 60;
    private readonly expandedHeight = 400;

    public collapse() {
        if (desktop.isHostedInDesktop) {
            window.current().setBounds({ height: this.collapsedHeight });
        }
    }

    public expand() {
        if (desktop.isHostedInDesktop) {
            window.current().setBounds({ height: this.expandedHeight });
        }
    }
}
