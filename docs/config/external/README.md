# External

Defines an external application to launch.

| Field      | Type                                                 | Notes                                                   |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------- |
| apiVersion | `string`                                             | Optional api version for this object.                   |
| kind       | `string`                                             | Identifer for this configuration object.                |
| metadata   | [`Metadata`](../metadata)                            | Object metadata, see [metadata](../metadata).           |
| spec       | [`ExternalSpecification`](./#external-specification) | See [External Specification](./#external-specification).|
| status     | [`ExternalStatus`](./#external-status)               | See [External Status](./#external-status).              |

## External Specification

The specification for an external application.

| Field      | Type                    | Notes                                              |
| ---------- | ----------------------- | -------------------------------------------------- |
| arguments  | `string[]`              | A list of arguments to apply to the executable     |
| env        | `EnvironmentParameters` | A key value map of environment variables to apply. |
| executable | `string`                | A relative or absolute path to an executable.      |

## External Status <Badge text="READONLY" vertical="middle" type="error" />

Populated by Desktop.

| Field     | Type     | Notes                                       |
| --------- | -------- | ------------------------------------------- |
| message   | `string` | A human readable message.                   |
| pid       | `number` | The OS `pid` of the process.                |
| startTime | `Date`   | The start time of the external application. |

## Example

```yaml
---
kind: external
metadata:
  name: calculator
  description: Launches a calculator application.
  namespace: examples
spec:
  executable: Caclulator.exe
```
