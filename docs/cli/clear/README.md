# clear

Clear caches and storage data with the given options.

## Parameters

#### &ndash;&ndash;area `[choices: "auth", "hostResolver", "http", "storageData"]` `[default: "http"]`

The cache area to clear.

#### &ndash;&ndash;authType `[choices: "password", "clientCertificate"]` `[default: "password"]`

The default auth type to clear, only valid when `--area` is set to `auth`.

#### &ndash;&ndash;partition

Specify the session to clear by the partition identifier.

## Examples

<code-group>
<code-block title="Clear auth cache">

```bash
desktop clear auth
```

</code-block>
</code-group>
