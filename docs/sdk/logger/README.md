# logger

## debug <Badge text="M" type="warning" vertical="middle" />

### `debug(message: string, ...meta: any[]): void;`

Log at debug level.

```js
import { logger } from "@reactivemarkets/desktop-sdk";

logger.debug("Logs to a structured logger", {
    any: "data",
});
```

## error <Badge text="M" type="warning" vertical="middle" />

### `error(message: string, ...meta: any[]): void;`

Log at error level.

```js
import { logger } from "@reactivemarkets/desktop-sdk";

logger.error("Logs to a structured logger", {
    any: "data",
});
```

## info <Badge text="M" type="warning" vertical="middle" />

### `info(message: string, ...meta: any[]): void;`

Log at info level.

```js
import { logger } from "@reactivemarkets/desktop-sdk";

logger.info("Logs to a structured logger", {
    any: "data",
});
```

## verbose <Badge text="M" type="warning" vertical="middle" />

### `verbose(message: string, ...meta: any[]): void;`

Log at verbose level.

```js
import { logger } from "@reactivemarkets/desktop-sdk";

logger.verbose("Logs to a structured logger", {
    any: "data",
});
```

## warn <Badge text="M" type="warning" vertical="middle" />

### `warn(message: string, ...meta: any[]): void;`

Log at warn level.

```js
import { logger } from "@reactivemarkets/desktop-sdk";

logger.warn("Logs to a structured logger", {
    any: "data",
});
```
