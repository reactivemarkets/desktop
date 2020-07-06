# Update Policy

Defines the update policy.

| Field      | Type                                              | Notes |
| ---------- | ------------------------------------------------- | -------- |
| apiVersion | `string`                                          | Optional api version for this object. |
| kind       | `string`                                          | Identifer for this configuration object. |
| metadata   | [`Metadata`](../metadata)                         | Object metadata, see [metadata](../metadata). |
| spec       | [`UpdatePolicySpecification`](./#UpdatePolicyspecification) | See [UpdatePolicySpecification](./#UpdatePolicyspecification).|
| status     | [`UpdatePolicyStatus`](./#UpdatePolicystatus)               | See [UpdatePolicyStatus](./#UpdatePolicystatus).|

## Update Policy Specification

## Update Policy Status <Badge text="READONLY" vertical="middle" type="error" />

Populated by Desktop.

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
