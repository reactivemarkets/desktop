# registry

## listApplications <Badge text="M" type="warning" vertical="middle" />

### `listApplications(namespace?: string): Promise<IConfiguration[]>`

List all registered applications in the given namespace.

```js
import { registry } from "@reactivemarkets/desktop-sdk";

const applications = await registry.listApplications();
```

## register <Badge text="M" type="warning" vertical="middle" />

### `register(configuration: IConfiguration): Promise<void>`

Register a new `configuration` object.

```js
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

```js
import { registry } from "@reactivemarkets/desktop-sdk";

const applications = await registry.listApplications();

await registry.unregister(applications[0]);
```
