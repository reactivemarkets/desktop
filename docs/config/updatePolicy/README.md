# Update Policy

Defines the update policy.

| Field      | Type                                              | Notes |
| ---------- | ------------------------------------------------- | -------- |
| apiVersion | `string`                                          | Optional api version for this object. |
| kind       | `string`                                          | Identifer for this configuration object. |
| metadata   | [`Metadata`](../metadata)                         | Object metadata, see [metadata](../metadata). |
| spec       | [`UpdatePolicySpecification`](./#update-policy-specification) | See [Update Policy Specification](./#update-policy-specification).|

## Update Policy Specification

The specification for an update policy.

| Field           | Type               | Notes                                                                  |
| --------------- | ------------------ | ---------------------------------------------------------------------- |
| allowDowngrade  | `boolean`          | Whether to allow version downgrade.                                    |
| allowPrerelease | `boolean`          | Whether to allow update to pre-release versions.                       |
| channel         | `string`           | Sets the channel to recieve updates from.                              |
| checkForUpdates | `boolean`          | Whether to check for updates.                                          |
| parameters      | `UpdateParameters` | Key value map to override parameters in the specified update provider. |
| provider        | `string`           | The update source.                                                     |

## Example

```yaml
---
kind: updatePolicy
metadata:
  name: Updates
  description: Update policy for desktop.
  namespace: desktop
spec:
  checkForUpdates: true
```
