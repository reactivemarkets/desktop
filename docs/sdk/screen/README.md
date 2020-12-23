# screen

## getAllDisplays <Badge text="M" type="warning" vertical="middle" />

### `getAllDisplays(): Promise<IDisplay[]>`

An array of displays that are currently available.

```ts
import { display } from "@reactivemarkets/desktop-sdk";

const displays = await display.getAllDisplays();
```

## getCursorScreenDisplay <Badge text="M" type="warning" vertical="middle" />

### `getCursorScreenDisplay(): Promise<IDisplay>`

The display the current cursor screen point is nearest to.

```ts
import { display } from "@reactivemarkets/desktop-sdk";

const display = await display.getCursorScreenDisplay();
```

## getCursorScreenPoint <Badge text="M" type="warning" vertical="middle" />

### `getCursorScreenPoint(): Promise<IPoint>`

The current absolute position of the mouse pointer.

```ts
import { display } from "@reactivemarkets/desktop-sdk";

const { x, y } = await display.getCursorScreenPoint();
```

## getDisplayNearestPoint <Badge text="M" type="warning" vertical="middle" />

### `getDisplayNearestPoint(): Promise<IDisplay>`

The display nearest the specified point.

```ts
import { display } from "@reactivemarkets/desktop-sdk";

const display = await display.getDisplayNearestPoint({ x: 0, y: 0});
```

## getPrimaryDisplay <Badge text="M" type="warning" vertical="middle" />

### `getPrimaryDisplay(): Promise<IDisplay>`

The primary display.

```ts
import { display } from "@reactivemarkets/desktop-sdk";

const display = await display.getPrimaryDisplay();
```

## off <Badge text="M" type="warning" vertical="middle" />

### `off(event: ScreenEvents, listener: () => void): void`

Removes a listener from [Screen Events](./#screen-events).

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

const listener = () => {
    // trigger an action
};

desktop.off("display-added", listener);
```

## on <Badge text="M" type="warning" vertical="middle" />

### `on(event: ScreenEvents, listener: () => void): void`

Adds a listener to [Screen Events](./#screen-events).

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

const listener = () => {
    // trigger an action
};

desktop.on("display-added", listener);
```

## Screen Events

| Event                   | Description                                |
| ----------------------- | ------------------------------------------ |
| display-added           | Emitted when a new display has been added. |
| display-removed         | Emitted when a display has been removed.   |
| display-metrics-changed | Emitted when a display metric has changed. |
