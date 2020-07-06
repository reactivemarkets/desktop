# Service

Defines a service.

| Field      | Type                                              | Notes |
| ---------- | ------------------------------------------------- | -------- |
| apiVersion | `string`                                          | Optional api version for this object. |
| kind       | `string`                                          | Identifer for this configuration object. |
| metadata   | [`Metadata`](../metadata)                         | Object metadata, see [metadata](../metadata). |
| spec       | [`ServiceSpecification`](./#servicespecification) | See [ServiceSpecification](./#servicespecification).|
| status     | [`ServiceStatus`](./#servicestatus)               | See [ServiceStatus](./#servicestatus).|

## Service Specification

## Service Status <Badge text="READONLY" vertical="middle" type="error" />

Populated by Desktop.

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
