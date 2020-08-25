# Application

Defines an application.

| Field      | Type                                                       | Notes                                                          |
| ---------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| apiVersion | `string`                                                   | Optional api version for this object.                          |
| kind       | `string`                                                   | Identifer for this configuration object.                       |
| metadata   | [`Metadata`](../metadata)                                  | Object metadata, see [metadata](../metadata).                  |
| spec       | [`ApplicationSpecification`](./#application-specification) | See [Application Specification](./#application-specification). |
| status     | [`ApplicationStatus`](./#application-status)               | See [Application Status](./#application-status).               |

## Application Specification

The specification for an application.

| Field                | Type               | Notes                                                           |
| -------------------- | ------------------ | --------------------------------------------------------------- |
| contentProtection    | `boolean`          | Prevents the window contents from being captured by other apps. |
| excludeFromWorkspace | `boolean`          | Don't include this application in a workspace.                  |
| launchOnStart        | `boolean`          | Disable launching the application on Desktop start.             |
| singleInstance       | `boolean`          | Only allow one instance of this application.                    |
| url                  | `string`           | The `file://`, `http://`, `https://` or `asar` to load.         |
| webPreferences       | `WebPreferences`   | See [Web Preferences](./#web-preferences).                      |
| window               | `WindowParameters` | See [Window Parameters](./#window-parameters).                  |

## Application Status <Badge text="READONLY" vertical="middle" type="error" />

Populated by Desktop.

| Field        | Type                                       | Notes                                                   |
| ------------ | ------------------------------------------ | ------------------------------------------------------- |
| height       | `number`                                   | Current height of the window.                           |
| isFullScreen | `boolean`                                  | If the window is full screen.                           |
| isMaximized  | `boolean`                                  | If the window is maximized.                             |
| isMinimized  | `boolean`                                  | If the window is minimized.                             |
| message      | `string`                                   | A human readable message.                               |
| osProcessId  | `number`                                   | The operating system `pid` of the associated renderer.  |
| processId    | `number`                                   | The Chromium internal `pid` of the associated renderer. |
| startTime    | `Date`                                     | The start time of the current window.                   |
| state        | [`ApplicationState`](./#application-state) | See [Application State](./#application-state).          |
| width        | `number`                                   | Current width of the window.                            |
| windowId     | `number`                                   | The windowId.                                           |
| x            | `number`                                   | Current x position of the window.                       |
| y            | `number`                                   | Current y position of the window.                       |

## Application State

| Value    | Notes                                 |
| -------- | ------------------------------------- |
| Runnning | The application is currently running. |
| Closed   | The application has been closed.      |

## Web Preferences

| Field     | Type      | Notes                                                                                   |
| --------- | --------- | --------------------------------------------------------------------------------------- |
| affinity  | `string`  | When specified, web pages with the same affinity will run in the same renderer process. |
| devTools  | `boolean` | Enable opening of devTools via the [cli](/cli).                                         |
| partition | `string`  | The session partition.                                                                  |

## Window Parameters

| Field            | Type      | Notes                                                                                            |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------ |
| acceptFirstMouse | `boolean` | Whether the web view accepts a single mouse-down event that simultaneously activates the window. |

## Example

```yaml
---
kind: application
metadata:
  name: Dock
  description: Creates a dock to launch new windows.
  namespace: desktop
  annotations:
    '@reactivemarkets/desktop-core':
      includeInTray: true
    '@reactivemarkets/desktop-dock':
      excludeFromSearch: true
  uid: cu8Ff-fgxUOtLtOH2xdrh
spec:
  singleInstance: true
  url: dock.asar
  window:
    backgroundColor: '#303030'
    center: true
    frame: false
    fullscreenable: false
    height: 60
    minimizable: false
    maximizable: false
    minHeight: 60
    minWidth: 400
    skipTaskbar: true
    title: Dock
    useContentSize: true
    width: 680
status:
  x: 380
  y: 228
  width: 680
  height: 60
  isFullScreen: false
  isMaximized: false
  isMinimized: false
  osProcessId: 41022
  processId: 4
  startTime: '2020-07-06T08:02:59.812Z'
  state: Running
  windowId: 1
```
