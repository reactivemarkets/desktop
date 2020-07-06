# Storage

Defines storage.

| Field      | Type                                              | Notes |
| ---------- | ------------------------------------------------- | -------- |
| apiVersion | `string`                                          | Optional api version for this object. |
| kind       | `string`                                          | Identifer for this configuration object. |
| metadata   | [`Metadata`](../metadata)                         | Object metadata, see [metadata](../metadata). |
| spec       | [`StorageSpecification`](./#storagespecification) | See [StorageSpecification](./#storagespecification).|
| status     | [`StorageStatus`](./#storagestatus)               | See [StorageStatus](./#storagestatus).|

## Storage Specification

## Storage Status <Badge text="READONLY" vertical="middle" type="error" />

Populated by Desktop.

## Example

```yaml
---
kind: storage
metadata:
  name: Desktop storage
  description: Storage configuration for the desktop namespace
  namespace: desktop
  uid: ed874d04-54d7-447d-b421-5e937fffd377
spec:
  provisioner: local
status:
  startTime: '2020-07-06T08:02:58.899Z'
  state: Provisioned
```
