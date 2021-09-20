# init

Create a template configuration file.

## Parameters

#### &ndash;&ndash;kind, -k `[choices: "application", "service"]` `[default: "application"]`

The configuration kind.

#### &ndash;&ndash;name, -n

The name of the application or service

#### &ndash;&ndash;url, -u

The url to use for application

#### &ndash;&ndash;output, -o `[choices: "yaml", "json"]` `[default: "yaml"]`

The output format.

## Examples

<code-group>
<code-block title="Base configuration">

```bash
desktop init
```

</code-block>
<code-block title="Application details">

```bash
desktop init -n "Desktop Site" -u https://reactivemarkets.github.io/desktop/
```

</code-block>
</code-group>
