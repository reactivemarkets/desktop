# registry

## listApplications <Badge text="M" type="warning" vertical="middle" />

### `listApplications(namespace?: string): Promise<IConfiguration[]>`

List all registered applications in the given namespace.

```ts
import { registry } from "@reactivemarkets/desktop-sdk";

const applications = await registry.listApplications();
```

## off <Badge text="M" type="warning" vertical="middle" />

### `off(event: RegistryEvents, listener: () => void): void`

Removes a listener from [Registry Events](./#registry-events).

```ts
import { registry } from "@reactivemarkets/desktop-sdk";

const listener = (configuration: IConfiguration) => {
    // trigger an action
};

registry.off("registered", listener);
```

## on <Badge text="M" type="warning" vertical="middle" />

### `on(event: RegistryEvents, listener: () => void): void`

Adds a listener to [Registry Events](./#registry-events).

```ts
import { registry } from "@reactivemarkets/desktop-sdk";

const listener = (configuration: IConfiguration) => {
    // trigger an action
};

registry.on("registered", listener);
```

## register <Badge text="M" type="warning" vertical="middle" />

### `register(configuration: IConfiguration): Promise<void>`

Register a new `configuration` object.

```ts
import { registry } from "@reactivemarkets/desktop-sdk";

await registry.register({
    kind: "application",
    metadata: {
        name: "Developer Docs",
        namespace: "Examples",
    },
    spec: {
        url: "https://developer.reactivemarkets.com",
    },
});
```

## unregister <Badge text="M" type="warning" vertical="middle" />

### `unregister(configuration: IConfiguration): Promise<void>`

Unregister a previously registered configuation object. This will not stop anything currently running.

```ts
import { registry } from "@reactivemarkets/desktop-sdk";

const applications = await registry.listApplications();

await registry.unregister(applications[0]);
```

## Registry Events

| Event        | Description                                           |
| ------------ | ----------------------------------------------------- |
| registered   | Emitted when a new configuration has been registered. |
| unregistered | Emitted when a configuration has been unregistered.   |
