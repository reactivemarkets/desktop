import { IDisplay } from "./iDisplay";
import { IPoint } from "./iPoint";
import { ScreenEvents } from "./screenEvents";

export interface IScreen {
    /**
     * An array of displays that are currently available.
     */
    getAllDisplays(): Promise<IDisplay[]>;

    /**
     * The display the current cursor screen point is nearest to.
     */
    getCursorScreenDisplay(): Promise<IDisplay>;

    /**
     * The current absolute position of the mouse pointer.
     */
    getCursorScreenPoint(): Promise<IPoint>;

    /**
     * The display nearest the specified point.
     * @param point the point.
     */
    getDisplayNearestPoint(point: IPoint): Promise<IDisplay>;

    /**
     * The primary display.
     */
    getPrimaryDisplay(): Promise<IDisplay>;

    /**
     * Remove listener from the @see ScreenEvents
     * @param event `ScreenEvents`
     * @param listener
     */
    off(event: ScreenEvents, listener: () => void): void;

    /**
     * Listen to @see SystemEvents
     * @param event `ScreenEvents`
     * @param listener
     */
    on(event: ScreenEvents, listener: () => void): void;
}
