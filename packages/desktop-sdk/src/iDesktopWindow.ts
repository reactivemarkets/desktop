import { IRectangle } from "./Rectangle";
import { WindowEvents } from "./windowEvents";

export interface IDesktopWindow {
    /**
     * Removes focus from the window.
     */
    blur(): Promise<void>;

    /**
     * Moves window to the center of the screen.
     */
    center(): Promise<void>;

    /**
     * Try to close the window. This has the same effect as a user manually clicking the close button of the window. The web page may cancel the close though.
     */
    close(): Promise<void>;

    /**
     * Starts or stops flashing the window to attract user's attention.
     * @param flash To flash or not.
     */
    flashFrame(flash: boolean): Promise<void>;

    /**
     * Focuses on the window.
     */
    focus(): Promise<void>;

    /**
     * Retrieves the bounds of the window.
     */
    getBounds(): Promise<IRectangle>;

    /**
     * Retrieves the window minimum width and height.
     */
    getMinimumSize(): Promise<number[]>;

    /**
     * Hides the window.
     */
    hide(): Promise<void>;

    /**
     * Whether the window is always on top of other windows.
     */
    isAlwaysOnTop(): Promise<boolean>;

    /**
     * Whether the window can be manually closed by user.
     */
    isCloseable(): Promise<boolean>;

    /**
     * Whether the window is enabled.
     */
    isEnabled(): Promise<boolean>;

    /**
     * Whether the window is focused.
     */
    isFocused(): Promise<boolean>;

    /**
     * Whether the window is in fullscreen mode.
     */
    isFullscreen(): Promise<boolean>;

    /**
     * Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
     */
    isFullscreenable(): Promise<boolean>;

    /**
     * Whether the window is in kiosk mode.
     */
    isKiosk(): Promise<boolean>;

    /**
     * Whether the window can be manually maximized by user.
     */
    isMaximizable(): Promise<boolean>;

    /**
     * Whether the window is maximized.
     */
    isMaximized(): Promise<boolean>;

    /**
     * Whether menu bar automatically hides itself.
     */
    isMenuBarAutoHide(): Promise<boolean>;

    /**
     * Whether the menu bar is visible.
     */
    isMenuBarVisible(): Promise<boolean>;

    /**
     * Whether the window can be manually minimized by the user.
     */
    isMinimizable(): Promise<boolean>;

    /**
     * Whether the window is minimized.
     */
    isMinimized(): Promise<boolean>;

    /**
     * Whether current window is a modal window.
     */
    isModal(): Promise<boolean>;

    /**
     * Whether the window can be moved by user.
     */
    isMovable(): Promise<boolean>;

    /**
     * Whether the window can be manually resized by the user.
     */
    isResizable(): Promise<boolean>;

    /**
     * Whether the window is visible to the user.
     */
    isVisible(): Promise<boolean>;

    /**
     * Maximizes the window. This will also show (but not focus) the window if it isn't being displayed already.
     */
    maximize(): Promise<void>;

    /**
     * Minimizes the window.
     */
    minimize(): Promise<void>;

    /**
     * Moves window to top(z-order) regardless of focus.
     */
    moveTop(): Promise<void>;

    /**
     * Remove listener from the `WindowEvents`
     * @param event `WindowEvents`
     * @param listener
     */
    off(event: WindowEvents, listener: () => void): void;

    /**
     * Listen to window events
     * @param event `WindowEvents`
     * @param listener
     */
    on(event: WindowEvents, listener: () => void): void;

    /**
     * Reloads the current web page.
     */
    reload(): Promise<void>;

    /**
     * Restores the window from minimized state to its previous state.
     */
    restore(): Promise<void>;

    /**
     * Sets whether the window should show always on top of other windows. After setting this, the window is still a normal window, not a toolbox window which can not be focused on.
     * @param flag on top.
     */
    setAlwaysOnTop(flag: boolean): Promise<void>;

    /**
     * Resizes and moves the window to the supplied bounds. Any properties that are not supplied will default to their current values.
     * @param bounds bounds to change to
     * @param animate animate the change
     */
    setBounds(bounds: Partial<IRectangle>, animate?: boolean): Promise<void>;

    /**
     * Sets whether the window should be in fullscreen mode.
     * @param flag Boolean to indicate enter or leave
     */
    setFullScreen(flag: boolean): Promise<void>;

    /**
     * Enters or leaves kiosk mode.
     * @param flag Boolean to indicate enter or leave
     */
    setKiosk(flag: boolean): Promise<void>;

    /**
     * Shows and gives focus to the window.
     */
    show(): Promise<void>;
}
