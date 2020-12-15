# launcher

## launch <Badge text="M" type="warning" vertical="middle" />

### `launch(configuration: IConfiguration): Promise<IConfiguration>`

Launch the given `configuration`.

```ts
import { launcher } from "@reactivemarkets/desktop-sdk";

const configuration = await launcher.launch({
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
