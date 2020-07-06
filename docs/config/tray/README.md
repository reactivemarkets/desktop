# Tray

Defines the tray.

| Field      | Type                                              | Notes |
| ---------- | ------------------------------------------------- | -------- |
| apiVersion | `string`                                          | Optional api version for this object. |
| kind       | `string`                                          | Identifer for this configuration object. |
| metadata   | [`Metadata`](../metadata)                         | Object metadata, see [metadata](../metadata). |
| spec       | [`TraySpecification`](./#trayspecification) | See [TraySpecification](./#trayspecification).|
| status     | [`TrayStatus`](./#traystatus)               | See [TrayStatus](./#traystatus).|

## Tray Specification

## Tray Status <Badge text="READONLY" vertical="middle" type="error" />

Populated by Desktop.

## Example

```yaml
---
kind: tray
metadata:
  name: Desktop Tray
  description: The desktop tray icon.
  namespace: desktop
  uid: 0043772c-8a24-47cd-b920-05fd6073a220
status:
  startTime: '2020-07-06T08:02:58.906Z'
```
