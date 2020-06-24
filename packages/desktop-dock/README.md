# Desktop Dock

The architecture for [Desktop](https://github.com/reactivemarkets/desktop) is modular with the build combining many asar files into one package.

This application exposes a dock to find, open and manage applications.

## Configuration

```yaml
---
kind: application
metadata:
  name: dock
  description: Creates a dock to launch new windows.
  namespace: desktop
  annotations:
    "@desktop/dock":
      excludeFromSearch: true
spec:
  singleInstance: true
  url: dock.asar
  window:
    backgroundColor: "#303030"
    center: true
    frame: false
    fullscreenable: false
    height: 60
    minimizable: false
    maximizable: false
    minHeight: 60
    minWidth: 400
    title: Dock
    useContentSize: true
    width: 680
```

## Building from source

To install all dependencies and build run:

```bash
git clone https://github.com/reactivemarkets/desktop.git
cd desktop
npm ci
npm run build
```
