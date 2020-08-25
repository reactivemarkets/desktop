# Tray

Defines the tray.

| Field      | Type                                              | Notes |
| ---------- | ------------------------------------------------- | -------- |
| apiVersion | `string`                                          | Optional api version for this object. |
| kind       | `string`                                          | Identifer for this configuration object. |
| metadata   | [`Metadata`](../metadata)                         | Object metadata, see [metadata](../metadata). |
| spec       | [`TraySpecification`](./#tray-specification)      | See [Tray Specification](./#tray-specification).|
| status     | [`TrayStatus`](./#tray-status)                    | See [Tray Status](./#tray-status).|

## Tray Specification

The specification for a tray.

| Field            | Type     | Notes                                      |
| ---------------- | -------- | ------------------------------------------ |
| documentationUrl | `string` | The url to use for the documentation link. |
| icon             | `string` | The icon to use in the tray.               |

## Tray Status <Badge text="READONLY" vertical="middle" type="error" />

Populated by Desktop.

| Field     | Type     | Notes                       |
| --------- | -------- | --------------------------- |
| startTime | `Date`   | The start time of the tray. |

## Example

```yaml
---
kind: tray
metadata:
  name: Desktop Tray
  description: The desktop tray icon.
  namespace: desktop
  uid: h53RbpUBB5SG5QpuxV-K4
status:
  startTime: '2020-07-06T08:02:58.906Z'
```
