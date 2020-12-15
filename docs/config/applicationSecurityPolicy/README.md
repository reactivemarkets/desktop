# Application Security Policy

Defines an Application Security Policy.

| Field      | Type                                                       | Notes                                                          |
| ---------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| apiVersion | `string`                                                   | Optional api version for this object.                          |
| kind       | `string`                                                   | Identifer for this configuration object.                       |
| metadata   | [`Metadata`](../metadata)                                  | Object metadata, see [metadata](../metadata).                  |
| spec       | [`ApplicationSecurityPolicySpecification`](./#application-security-policy-specification) | See [Application Security Policy Specification](./#application-security-policy-specification). |

## Application Security Policy Specification

The specification for an application security policy.

| Field          | Type       | Notes                                                          |
| -------------- | ---------- | -------------------------------------------------------------- |
| allowedDomains | `string[]` | A list of regular expressions for allowed application domains. |
| blockedDomains | `string[]` | A list of regular expressions for blocked application domains. |

## Example

```yaml
---
kind: applicationSecurityPolicy
metadata:
  name: Application Security Policy
  description: Security Policy for desktop.
  namespace: desktop
spec:
  allowedDomains:
    - ^https:\/\/.*$
  blockedDomains:
    - ^.*\.xxx$
```
