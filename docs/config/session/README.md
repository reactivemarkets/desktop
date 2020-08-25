# Session

Defines the behavior of a session.

| Field      | Type                                               | Notes                                                 |
| ---------- | -------------------------------------------------- | ----------------------------------------------------- |
| apiVersion | `string`                                           | Optional api version for this object.                 |
| kind       | `string`                                           | Identifer for this configuration object.              |
| metadata   | [`Metadata`](../metadata)                          | Object metadata, see [metadata](../metadata).         |
| spec       | [`SessionSpecification`](./#session-specification) | See [Session Specification](./#session-specification).|

## Session Specification

The specification for a session.

| Field      | Type                                         | Notes                                            |
| ---------- | -------------------------------------------- | ------------------------------------------------ |
| parameters | [`SessionParameters`](./#session-parameters) | See [Session Parameters](./#session-parameters). |
| partition  | `string`                                     | Name of the session partition to configure.      |

## Session Parameters

| Field            | Type       | Notes                                                                                                                     |
| ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| downloadPath     | `string`   | Sets download saving directory. By default, the download directory will be the Downloads under the respective app folder. |
| ntlmDomains      | `string[]` | Dynamically sets whether to always send credentials for HTTP NTLM or Negotiate authentication.                            |
| pacScript        | `string`   | The URL associated with the PAC file.                                                                                     |
| proxyBypassRules | `string[]` | A list of rules indicating which URLs should bypass the proxy settings.                                                   |
| proxyRules       | `string`   | Rules indicating which proxies to use.                                                                                    |
| userAgent        | `string`   | Overrides the userAgent.                                                                                                  |

## Example

```yaml
---
kind: session
metadata:
  name: Default session
  description: Configures the default session
  namespace: desktop
spec:
  parameters:
    ntlmDomains:
      - reactivemarkets.com
```
