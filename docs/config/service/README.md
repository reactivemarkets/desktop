# Service

Defines a service.

| Field      | Type                                              | Notes                                               |
| ---------- | ------------------------------------------------- | --------------------------------------------------- |
| apiVersion | `string`                                          | Optional api version for this object.               |
| kind       | `string`                                          | Identifer for this configuration object.            |
| metadata   | [`Metadata`](../metadata)                         | Object metadata, see [metadata](../metadata).       |
| spec       | [`ServiceSpecification`](./#servicespecification) | See [ServiceSpecification](./#servicespecification).|
| status     | [`ServiceStatus`](./#servicestatus)               | See [ServiceStatus](./#servicestatus).              |

## Service Specification

The specification for a service.

| Field      | Type                | Notes                                                            |
| ---------- | ------------------- | ---------------------------------------------------------------- |
| main       | `string`            | Path to or name of an asar containing the service.               |
| parameters | `ServiceParameters` | A key value map that can be used to store arbitrary parameters.  |

## Service Status <Badge text="READONLY" vertical="middle" type="error" />

Populated by Desktop.

| Field     | Type     | Notes                          |
| --------- | -------- | ------------------------------ |
| message   | `string` | A human readable message.      |
| pid       | `number` | The OS `pid` of the process.   |
| startTime | `Date`   | The start time of the service. |

## Example

```yaml
---
kind: service
metadata:
  name: api
  description: Exposes a REST api and websocket endpoint for Desktop
  namespace: desktop
spec:
  main: api.asar
  parameters:
    host: 127.0.0.1
    port: 8282
```
