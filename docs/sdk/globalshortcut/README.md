# globalShortcut

## isRegistered <Badge text="M" type="warning" vertical="middle" />

### `isRegistered(accelerator: string): Promise<boolean>`

Whether this application has registered the `accelerator`.

```js
import { globalShortcut } from "@reactivemarkets/desktop-sdk";

const isRegistered = await globalShortcut.isRegistered("CommandOrControl+X");
```

## register <Badge text="M" type="warning" vertical="middle" />

### `register(accelerator: string, listener: () => void): Promise<void>`

Registers a global shortcut of `accelerator`.

If the accelerator is already registered by another application outside of the desktop, the listener will sliently fail. This is the behavior of operating systems.

```js
import { globalShortcut } from "@reactivemarkets/desktop-sdk";

await globalShortcut.register("CommandOrControl+X", () => {
    console.info("shortcut invoked");
});
```

## unregister <Badge text="M" type="warning" vertical="middle" />

### `unregister(accelerator: string, listener: () => void): Promise<void>`

Unregisters the global shortcut of `accelerator`.

```js
import { globalShortcut } from "@reactivemarkets/desktop-sdk";

const listener = () => console.info("CommandOrControl+X invoked");

await globalShortcut.register("CommandOrControl+X", listener);
await globalShortcut.unregister("CommandOrControl+X", listener);
```

## unregisterAll <Badge text="M" type="warning" vertical="middle" />

### `unregisterAll(): Promise<void>`

Unregisters all global shortcuts for this application.

```js
import { globalShortcut } from "@reactivemarkets/desktop-sdk";

await globalShortcut.unregisterAll();
```
