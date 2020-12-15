# router

## publish <Badge text="M" type="warning" vertical="middle" />

### `publish<T>(channel: string, payload: T): void`

Publish a message on a channel.

```ts
import { router } from "@reactivemarkets/desktop-sdk";

router.publish("my_channel", {
    any: "data",
});
```

## subscribe <Badge text="M" type="warning" vertical="middle" />

### `subscribe<T>(channel: string, listener: (payload: T) => void): void`

Subscribe to a channel.

```ts
import { router } from "@reactivemarkets/desktop-sdk";

router.subscribe("my_channel", (payload) => {
    console.log(payload);
});
```

## unsubscribe <Badge text="M" type="warning" vertical="middle" />

### `unsubscribe<T>(channel: string, listener: (payload: T) => void): void`

Unsubscribe from a channel.

```ts
import { router } from "@reactivemarkets/desktop-sdk";

const listener = (data: string) => {
    console.log(payload);
};

router.subscribe("my_channel", listener);
router.unsubscribe("my_channel", listener);
```
