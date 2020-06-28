# Desktop About

The architecture for [Desktop](https://github.com/reactivemarkets/desktop) is modular with the build combining many asar files into one package.

This application exposes an about window to show desktop details.

## Configuration

```yaml
---
kind: application
metadata:
  name: about
  description: Creates an about window.
  namespace: desktop
  annotations:
    "@reactivemarkets/desktop-dock":
      excludeFromSearch: true
spec:
  launchOnStart: false
  singleInstance: true
  url: about.asar
  window:
    alwaysOnTop: true
    backgroundColor: "#4A90E2"
    center: true
    fullscreenable: false
    height: 500
    minimizable: false
    maximizable: false
    resizable: false
    skipTaskbar: true
    title: About Desktop
    titleBarStyle: hidden
    useContentSize: true
    width: 700
```

## Building from source

To install all dependencies and build run:

```bash
git clone https://github.com/reactivemarkets/desktop.git
cd desktop
npm ci
npm run build
```
