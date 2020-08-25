# Storage

Defines storage.

| Field      | Type                                               | Notes |
| ---------- | -------------------------------------------------- | -------- |
| apiVersion | `string`                                           | Optional api version for this object. |
| kind       | `string`                                           | Identifer for this configuration object. |
| metadata   | [`Metadata`](../metadata)                          | Object metadata, see [metadata](../metadata). |
| spec       | [`StorageSpecification`](./#storage-specification) | See [Storage Specification](./#storage-specification).|
| status     | [`StorageStatus`](./#storage-status)               | See [Storage Status](./#storage-status).|

## Storage Specification

The specification for storage.

| Field       | Type                | Notes                                                                     |
| ----------- | ------------------- | ------------------------------------------------------------------------- |
| parameters  | `StorageParameters` | A key value map that can be used to store parameters for the provisioner. |
| provisioner | `string`            | The storage provisioner to use to create storage.                         |

## Storage Status <Badge text="READONLY" vertical="middle" type="error" />

Populated by Desktop.

| Field     | Type                               | Notes                                   |
| --------- | ---------------------------------- | --------------------------------------- |
| message   | `string`                           | A human readable message.               |
| state     | [`StorageState`](./#storage-state) | See [Storage State](./#storage-state).  |
| startTime | `Date`                             | The start time of the storage instance. |

## Storage State

| Value       | Notes                                       |
| ----------- | ------------------------------------------- |
| Failed      | The storage failed to be provisioned.       |
| Provisioned | The storge is provisioned and ready to use. |

## Example

```yaml
---
kind: storage
metadata:
  name: Desktop storage
  description: Storage configuration for the desktop namespace
  namespace: desktop
  uid: tvMKukIbeyIxIE0hrDzdt
spec:
  provisioner: local
status:
  startTime: '2020-07-06T08:02:58.899Z'
  state: Provisioned
```
