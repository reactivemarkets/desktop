# window

## blur <Badge text="M" type="warning" vertical="middle" />

### `blur(): Promise<void>`

Removes focus from the window.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().blur();
```

## center <Badge text="M" type="warning" vertical="middle" />

### `center(): Promise<void>`

Moves window to the center of the screen.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().center();
```

## close <Badge text="M" type="warning" vertical="middle" />

### `close(): Promise<void>`

Try to close the window. This has the same effect as a user manually clicking the close button of the window. The web page may cancel the close though.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().close();
```

## flashFrame <Badge text="M" type="warning" vertical="middle" />

### `flashFrame(flash: boolean): Promise<void>`

Starts or stops flashing the window to attract user's attention.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().flashFrame(true);
```

## focus <Badge text="M" type="warning" vertical="middle" />

### `focus(): Promise<void>`

Focuses on the window.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().focus();
```

## getBounds <Badge text="M" type="warning" vertical="middle" />

### `getBounds(): Promise<IRectangle>`

Retrieves the bounds of the window.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const { x, y, width, height } = await window.current().getBounds();
```

## getMinimumSize <Badge text="M" type="warning" vertical="middle" />

### `getMinimumSize(): Promise<number[]>`

Retrieves the bounds of the window.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const [width, height] = await window.current().getMinimumSize();
```

## hide <Badge text="M" type="warning" vertical="middle" />

### `hide(): Promise<void>`

Hides the window.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().hide();
```

## isAlwaysOnTop <Badge text="M" type="warning" vertical="middle" />

### `isAlwaysOnTop(): Promise<boolean>`

Whether the window is always on top of other windows.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const onTop = await window.current().isAlwaysOnTop();
```

## isCloseable <Badge text="M" type="warning" vertical="middle" />

### `isCloseable(): Promise<boolean>`

Whether the window can be manually closed by user.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const closeable = await window.current().isCloseable();
```

## isEnabled <Badge text="M" type="warning" vertical="middle" />

### `isEnabled(): Promise<boolean>`

Whether the window is enabled.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const enabled = await window.current().isEnabled();
```

## isFocused <Badge text="M" type="warning" vertical="middle" />

### `isFocused(): Promise<boolean>`

Whether the window is focused.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const focused = await window.current().isFocused();
```

## isFullscreen <Badge text="M" type="warning" vertical="middle" />

### `isFullscreen(): Promise<boolean>`

Whether the window is in fullscreen mode.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const fullscreen = await window.current().isFullscreen();
```

## isFullscreenable <Badge text="M" type="warning" vertical="middle" />

### `isFullscreenable(): Promise<boolean>`

Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const fullscreenable = await window.current().isFullscreenable();
```

## isKiosk <Badge text="M" type="warning" vertical="middle" />

### `isKiosk(): Promise<boolean>`

Whether the window is in kiosk mode.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const kiosk = await window.current().isKiosk();
```

## isMaximizable <Badge text="M" type="warning" vertical="middle" />

### `isMaximizable(): Promise<boolean>`

Whether the window can be manually maximized by user.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const maximizable = await window.current().isMaximizable();
```

## isMaximized <Badge text="M" type="warning" vertical="middle" />

### `isMaximized(): Promise<boolean>`

Whether the window is maximized.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const maximized = await window.current().isMaximized();
```

## isMenuBarAutoHide <Badge text="M" type="warning" vertical="middle" />

### `isMenuBarAutoHide(): Promise<boolean>`

Whether menu bar automatically hides itself.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const autoHide = await window.current().isMenuBarAutoHide();
```

## isMenuBarVisible <Badge text="M" type="warning" vertical="middle" />

### `isMenuBarVisible(): Promise<boolean>`

Whether the menu bar is visible.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const visible = await window.current().isMenuBarVisible();
```

## isMinimizable <Badge text="M" type="warning" vertical="middle" />

### `isMinimizable(): Promise<boolean>`

Whether the window can be manually minimized by the user.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const minimizable = await window.current().isMinimizable();
```

## isMinimized <Badge text="M" type="warning" vertical="middle" />

### `isMinimized(): Promise<boolean>`

Whether the window is minimized.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const minimized = await window.current().isMinimized();
```

## isModal <Badge text="M" type="warning" vertical="middle" />

### `isModal(): Promise<boolean>`

Whether current window is a modal window.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const modal = await window.current().isModal();
```

## isMovable <Badge text="M" type="warning" vertical="middle" />

### `isMovable(): Promise<boolean>`

Whether the window can be moved by user.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const movable = await window.current().isMovable();
```

## isResizable <Badge text="M" type="warning" vertical="middle" />

### `isResizable(): Promise<boolean>`

Whether the window can be manually resized by the user.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const resizable = await window.current().isResizable();
```

## isVisible <Badge text="M" type="warning" vertical="middle" />

### `isVisible(): Promise<boolean>`

Whether the window is visible to the user.

```js
import { window } from "@reactivemarkets/desktop-sdk";

const resizable = await window.current().isVisible();
```

## maximize <Badge text="M" type="warning" vertical="middle" />

### `maximize(): Promise<void>`

Maximizes the window. This will also show (but not focus) the window if it isn't being displayed already.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().maximize();
```

## minimize <Badge text="M" type="warning" vertical="middle" />

### `minimize(): Promise<void>`

Minimizes the window.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().minimize();
```

## moveTop <Badge text="M" type="warning" vertical="middle" />

### `moveTop(): Promise<void>`

Moves window to top(z-order) regardless of focus.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().moveTop();
```

## reload <Badge text="M" type="warning" vertical="middle" />

### `reload(): Promise<void>`

Reloads the current web page.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().reload();
```

## restore <Badge text="M" type="warning" vertical="middle" />

### `restore(): Promise<void>`

Restores the window from minimized state to its previous state.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().restore();
```

## setAlwaysOnTop <Badge text="M" type="warning" vertical="middle" />

### `setAlwaysOnTop(flag: boolean): Promise<void>`

Sets whether the window should show always on top of other windows. After setting this, the window is still a normal window, not a toolbox window which can not be focused on.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().setAlwaysOnTop(true);
```

## setBounds <Badge text="M" type="warning" vertical="middle" />

### `setBounds(bounds: Partial<IRectangle>, animate?: boolean): Promise<void>`

Resizes and moves the window to the supplied bounds. Any properties that are not supplied will default to their current values.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().setBounds({
    width: 400,
});
```

## setFullScreen <Badge text="M" type="warning" vertical="middle" />

### `setFullScreen(flag: boolean): Promise<void>`

Sets whether the window should be in fullscreen mode.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().setFullScreen(true);
```

## setKiosk <Badge text="M" type="warning" vertical="middle" />

### `setKiosk(flag: boolean): Promise<void>`

Enters or leaves kiosk mode.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().setKiosk(true);
```

## show <Badge text="M" type="warning" vertical="middle" />

### `show(): Promise<void>`

Shows and gives focus to the window.

```js
import { window } from "@reactivemarkets/desktop-sdk";

await window.current().show();
```
