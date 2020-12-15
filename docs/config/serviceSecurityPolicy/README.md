# Service Security Policy

Defines a Service Security Policy.

| Field      | Type                                                       | Notes                                                          |
| ---------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| apiVersion | `string`                                                   | Optional api version for this object.                          |
| kind       | `string`                                                   | Identifer for this configuration object.                       |
| metadata   | [`Metadata`](../metadata)                                  | Object metadata, see [metadata](../metadata).                  |
| spec       | [`ServiceSecurityPolicySpecification`](./#service-security-policy-specification) | See [Service Security Policy Specification](./#service-security-policy-specification). |

## Service Security Policy Specification

The specification for a Service security policy.

| Field        | Type       | Notes                                                    |
| ------------ | ---------- | -------------------------------------------------------- |
| allowedPaths | `string[]` | A list of regular expressions for allowed service paths. |
| blockedPaths | `string[]` | A list of regular expressions for blocked service paths. |

## Example

```yaml
---
kind: serviceSecurityPolicy
metadata:
  name: Service Security Policy
  description: Security Policy for desktop.
  namespace: desktop
spec:
  allowedPaths:
    - ^.*$
```
