# desktop

## api <Badge text="P" vertical="middle" />

### `readonly api: any`

The underlying raw api object, this property is exposed but shouldn't be needed.

## isHostedInDesktop <Badge text="P" vertical="middle" />

### `readonly isHostedInDesktop: boolean`

A property that returns true if the application is running in the desktop host.

```js
import { desktop } from "@reactivemarkets/desktop-sdk";

const hosted = desktop.isHostedInDesktop;
```

## getAppName <Badge text="M" type="warning" vertical="middle" />

### `getAppName(): Promise<string>`

Gets the application name.

```js
import { desktop } from "@reactivemarkets/desktop-sdk";

const appName = await desktop.getAppName();
```

## getAppVersion <Badge text="M" type="warning" vertical="middle" />

### `getAppVersion(): Promise<string>`

Gets the application version.

```js
import { desktop } from "@reactivemarkets/desktop-sdk";

const appVersion = await desktop.getAppVersion();
```

## getVersions <Badge text="M" type="warning" vertical="middle" />

### `getVersions(): Promise<IDesktopVersions>`

Versions of chrome, node, v8 etc...

```js
import { desktop } from "@reactivemarkets/desktop-sdk";

const versions = await desktop.getVersions();
```

## quit <Badge text="M" type="warning" vertical="middle" />

### `quit(): Promise<void>`

Quits the application giving all applications time to close.

```js
import { desktop } from "@reactivemarkets/desktop-sdk";

await desktop.quit();
```

## showAboutPanel <Badge text="M" type="warning" vertical="middle" />

### `showAboutPanel(): Promise<void>`

Shows the desktop about panel.

```js
import { desktop } from "@reactivemarkets/desktop-sdk";

await desktop.showAboutPanel();
```
