import { ApplicationState } from "./applicationState";

export interface IApplicationStatus {
    /**
     * Current height of the window.
     */
    readonly height: number;
    /**
     * If the window is full screen.
     */
    readonly isFullScreen: boolean;
    /**
     * If the window is maximized.
     */
    readonly isMaximized: boolean;
    /**
     * If the window is minimized.
     */
    readonly isMinimized: boolean;
    /**
     * A human readable message.
     */
    readonly message?: string;
    /**
     * The operating system `pid` of the associated renderer.
     */
    readonly osProcessId: number;
    /**
     * The Chromium internal `pid` of the associated renderer.
     */
    readonly processId: number;
    /**
     * The start time of the current window.
     */
    readonly startTime: Date;
    /**
     * See `Application State`.
     */
    readonly state: ApplicationState;
    /**
     * Current width of the window.
     */
    readonly width: number;
    /**
     * The unique window id.
     */
    readonly windowId: number;
    /**
     * Current x position of the window.
     */
    readonly x: number;
    /**
     * Current y position of the window.
     */
    readonly y: number;
}
