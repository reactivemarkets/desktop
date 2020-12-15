# External Security Policy

Defines an External Security Policy.

| Field      | Type                                                       | Notes                                                          |
| ---------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| apiVersion | `string`                                                   | Optional api version for this object.                          |
| kind       | `string`                                                   | Identifer for this configuration object.                       |
| metadata   | [`Metadata`](../metadata)                                  | Object metadata, see [metadata](../metadata).                  |
| spec       | [`ExternalSecurityPolicySpecification`](./#external-security-policy-specification) | See [External Security Policy Specification](./#external-security-policy-specification). |

## External Security Policy Specification

The specification for an external security policy.

| Field              | Type       | Notes                                                  |
| ------------------ | ---------- | -----------------------------------------------------  |
| allowedExecutables | `string[]` | A list of regular expressions for allowed executables. |
| blockedExecutables | `string[]` | A list of regular expressions for blocked executables. |

## Example

```yaml
---
kind: externalSecurityPolicy
metadata:
  name: External Security Policy
  description: Security Policy for desktop.
  namespace: desktop
spec:
  allowedExecutables:
    - ^Calculator.exe$
  blockedExecutables:
    - ^.*$
```
