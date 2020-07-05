# Metadata

All configuration objects have Metadata.

| Field       | Type           | Notes                                 |
| ----------  | -------------- | ------------------------------------- |
| annotations | `IAnnotations` | A key value map that can be used to store arbitrary metadata. |
| description | `string`       | Identifer for this configuration object. |
| name        | `string`       | Name of this object, it must be unique within a namespace. |
| namespace   | `string`       | Namespace this object lives in, if not provided will be "default". |
| uid         | `string`       | Unique identifier automatically populated by Desktop. |
