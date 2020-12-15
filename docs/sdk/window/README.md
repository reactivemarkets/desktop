# window

## blur <Badge text="M" type="warning" vertical="middle" />

### `blur(): Promise<void>`

Removes focus from the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().blur();
```

## center <Badge text="M" type="warning" vertical="middle" />

### `center(): Promise<void>`

Moves window to the center of the screen.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().center();
```

## close <Badge text="M" type="warning" vertical="middle" />

### `close(): Promise<void>`

Try to close the window. This has the same effect as a user manually clicking the close button of the window. The web page may cancel the close though.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().close();
```

## flashFrame <Badge text="M" type="warning" vertical="middle" />

### `flashFrame(flash: boolean): Promise<void>`

Starts or stops flashing the window to attract user's attention.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().flashFrame(true);
```

## focus <Badge text="M" type="warning" vertical="middle" />

### `focus(): Promise<void>`

Focuses on the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().focus();
```

## getBounds <Badge text="M" type="warning" vertical="middle" />

### `getBounds(): Promise<IRectangle>`

Retrieves the bounds of the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const { x, y, width, height } = await window.current().getBounds();
```

## getMinimumSize <Badge text="M" type="warning" vertical="middle" />

### `getMinimumSize(): Promise<number[]>`

Retrieves the bounds of the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const [width, height] = await window.current().getMinimumSize();
```

## hide <Badge text="M" type="warning" vertical="middle" />

### `hide(): Promise<void>`

Hides the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().hide();
```

## isAlwaysOnTop <Badge text="M" type="warning" vertical="middle" />

### `isAlwaysOnTop(): Promise<boolean>`

Whether the window is always on top of other windows.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const onTop = await window.current().isAlwaysOnTop();
```

## isCloseable <Badge text="M" type="warning" vertical="middle" />

### `isCloseable(): Promise<boolean>`

Whether the window can be manually closed by user.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const closeable = await window.current().isCloseable();
```

## isEnabled <Badge text="M" type="warning" vertical="middle" />

### `isEnabled(): Promise<boolean>`

Whether the window is enabled.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const enabled = await window.current().isEnabled();
```

## isFocused <Badge text="M" type="warning" vertical="middle" />

### `isFocused(): Promise<boolean>`

Whether the window is focused.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const focused = await window.current().isFocused();
```

## isFullscreen <Badge text="M" type="warning" vertical="middle" />

### `isFullscreen(): Promise<boolean>`

Whether the window is in fullscreen mode.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const fullscreen = await window.current().isFullscreen();
```

## isFullscreenable <Badge text="M" type="warning" vertical="middle" />

### `isFullscreenable(): Promise<boolean>`

Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const fullscreenable = await window.current().isFullscreenable();
```

## isKiosk <Badge text="M" type="warning" vertical="middle" />

### `isKiosk(): Promise<boolean>`

Whether the window is in kiosk mode.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const kiosk = await window.current().isKiosk();
```

## isMaximizable <Badge text="M" type="warning" vertical="middle" />

### `isMaximizable(): Promise<boolean>`

Whether the window can be manually maximized by user.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const maximizable = await window.current().isMaximizable();
```

## isMaximized <Badge text="M" type="warning" vertical="middle" />

### `isMaximized(): Promise<boolean>`

Whether the window is maximized.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const maximized = await window.current().isMaximized();
```

## isMenuBarAutoHide <Badge text="M" type="warning" vertical="middle" />

### `isMenuBarAutoHide(): Promise<boolean>`

Whether menu bar automatically hides itself.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const autoHide = await window.current().isMenuBarAutoHide();
```

## isMenuBarVisible <Badge text="M" type="warning" vertical="middle" />

### `isMenuBarVisible(): Promise<boolean>`

Whether the menu bar is visible.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const visible = await window.current().isMenuBarVisible();
```

## isMinimizable <Badge text="M" type="warning" vertical="middle" />

### `isMinimizable(): Promise<boolean>`

Whether the window can be manually minimized by the user.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const minimizable = await window.current().isMinimizable();
```

## isMinimized <Badge text="M" type="warning" vertical="middle" />

### `isMinimized(): Promise<boolean>`

Whether the window is minimized.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const minimized = await window.current().isMinimized();
```

## isModal <Badge text="M" type="warning" vertical="middle" />

### `isModal(): Promise<boolean>`

Whether current window is a modal window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const modal = await window.current().isModal();
```

## isMovable <Badge text="M" type="warning" vertical="middle" />

### `isMovable(): Promise<boolean>`

Whether the window can be moved by user.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const movable = await window.current().isMovable();
```

## isResizable <Badge text="M" type="warning" vertical="middle" />

### `isResizable(): Promise<boolean>`

Whether the window can be manually resized by the user.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const resizable = await window.current().isResizable();
```

## isVisible <Badge text="M" type="warning" vertical="middle" />

### `isVisible(): Promise<boolean>`

Whether the window is visible to the user.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const resizable = await window.current().isVisible();
```

## maximize <Badge text="M" type="warning" vertical="middle" />

### `maximize(): Promise<void>`

Maximizes the window. This will also show (but not focus) the window if it isn't being displayed already.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().maximize();
```

## minimize <Badge text="M" type="warning" vertical="middle" />

### `minimize(): Promise<void>`

Minimizes the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().minimize();
```

## moveTop <Badge text="M" type="warning" vertical="middle" />

### `moveTop(): Promise<void>`

Moves window to top(z-order) regardless of focus.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().moveTop();
```

## off <Badge text="M" type="warning" vertical="middle" />

### `off(event: WindowEvents, listener: () => void): void`

Removes a listener to [Window Events](./#window-events) from the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const listener = () => {
    // trigger an action
};

window.current().off("blur", listener);
```

## on <Badge text="M" type="warning" vertical="middle" />

### `on(event: WindowEvents, listener: () => void): void`

Adds a listener to [Window Events](./#window-events) from the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

const listener = () => {
    // trigger an action
};

window.current().on("blur", listener);
```

## reload <Badge text="M" type="warning" vertical="middle" />

### `reload(): Promise<void>`

Reloads the current web page.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().reload();
```

## restore <Badge text="M" type="warning" vertical="middle" />

### `restore(): Promise<void>`

Restores the window from minimized state to its previous state.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().restore();
```

## setAlwaysOnTop <Badge text="M" type="warning" vertical="middle" />

### `setAlwaysOnTop(flag: boolean): Promise<void>`

Sets whether the window should show always on top of other windows. After setting this, the window is still a normal window, not a toolbox window which can not be focused on.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().setAlwaysOnTop(true);
```

## setBounds <Badge text="M" type="warning" vertical="middle" />

### `setBounds(bounds: Partial<IRectangle>, animate?: boolean): Promise<void>`

Resizes and moves the window to the supplied bounds. Any properties that are not supplied will default to their current values.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().setBounds({
    width: 400,
});
```

## setFullScreen <Badge text="M" type="warning" vertical="middle" />

### `setFullScreen(flag: boolean): Promise<void>`

Sets whether the window should be in fullscreen mode.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().setFullScreen(true);
```

## setKiosk <Badge text="M" type="warning" vertical="middle" />

### `setKiosk(flag: boolean): Promise<void>`

Enters or leaves kiosk mode.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().setKiosk(true);
```

## show <Badge text="M" type="warning" vertical="middle" />

### `show(): Promise<void>`

Shows and gives focus to the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().show();
```

## unmaximize <Badge text="M" type="warning" vertical="middle" />

### `unmaximize(): Promise<void>`

Unmaximizes the window.

```ts
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().unmaximize();
```

## Window Events

| Event                  | Description                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| always-on-top-changed  | Emitted when the window is set or unset to show always on top of other windows. |
| blur                   | Emitted when the window loses focus. |
| close                  | Emitted when the window is going to be closed. |
| enter-full-screen      | Emitted when the window enters a full-screen state. |
| enter-html-full-screen | Emitted when the window enters a full-screen state triggered by HTML API. |
| focus                  | Emitted when the window gains focus. |
| hide                   | Emitted when the window is hidden. |
| leave-full-screen      | Emitted when the window leaves a full-screen state. |
| leave-html-full-screen | Emitted when the window leaves a full-screen state triggered by HTML API. |
| maximize               | Emitted when window is maximized. |
| minimize               | Emitted when the window is minimized. |
| move                   | Emitted when the window is being moved to a new position. |
| moved                  | Emitted once when the window is moved to a new position. |
| page-title-updated     | Emitted when the document changed its title. |
| resize                 | Emitted after the window has been resized. |
| restore                | Emitted when the window is restored from a minimized state. |
| show                   | Emitted when the window is shown. |
| unmaximize             | Emitted when the window exits from a maximized state. |
| will-move              | Emitted before the window is moved. |
| will-resize            | Emitted before the window is resized. |
