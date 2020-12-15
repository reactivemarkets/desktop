# desktop

## api <Badge text="P" vertical="middle" />

### `readonly api: any`

The underlying raw api object, this property is exposed but shouldn't be needed.

## isHostedInDesktop <Badge text="P" vertical="middle" />

### `readonly isHostedInDesktop: boolean`

A property that returns true if the application is running in the desktop host.

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

const hosted = desktop.isHostedInDesktop;
```

## getAppName <Badge text="M" type="warning" vertical="middle" />

### `getAppName(): Promise<string>`

Gets the application name.

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

const appName = await desktop.getAppName();
```

## getAppVersion <Badge text="M" type="warning" vertical="middle" />

### `getAppVersion(): Promise<string>`

Gets the application version.

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

const appVersion = await desktop.getAppVersion();
```

## getVersions <Badge text="M" type="warning" vertical="middle" />

### `getVersions(): Promise<IDesktopVersions>`

Versions of chrome, node, v8 etc...

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

const versions = await desktop.getVersions();
```

## off <Badge text="M" type="warning" vertical="middle" />

### `off(event: SystemEvents, listener: () => void): void`

Removes a listener from [System Events](./#system-events).

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

const listener = () => {
    // trigger an action
};

desktop.off("lock-screen", listener);
```

## on <Badge text="M" type="warning" vertical="middle" />

### `on(event: SystemEvents, listener: () => void): void`

Adds a listener to [System Events](./#system-events).

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

const listener = () => {
    // trigger an action
};

desktop.on("lock-screen", listener);
```

## quit <Badge text="M" type="warning" vertical="middle" />

### `quit(): Promise<void>`

Quits the application giving all applications time to close.

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

await desktop.quit();
```

## showAboutPanel <Badge text="M" type="warning" vertical="middle" />

### `showAboutPanel(): Promise<void>`

Shows the desktop about panel.

```ts
import { desktop } from "@reactivemarkets/desktop-sdk";

await desktop.showAboutPanel();
```

## System Events

| Event         | Description                                              |
| ------------- | -------------------------------------------------------- |
| lock-screen   | Emitted when the system is about to lock the screen.     |
| on-ac         | Emitted when the system changes to AC power.             |
| on-battery    | Emitted when system changes to battery power.            |
| resume        | Emitted when system is resuming.                         |
| shutdown      | Emitted when the system is about to reboot or shut down. |
| suspend       | Emitted when the system is suspending.                   |
| unlock-screen | Emitted as soon as the systems screen is unlocked.       |
