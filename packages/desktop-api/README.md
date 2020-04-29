# Desktop API

The architecture for [Desktop](https://github.com/reactivemarkets/desktop) is modular with the build combining many asar files into one package.

This service exposes a REST api and websocket endpoint for Desktop. This allows for integration with applications external to that managed by Desktop.

## Configuration

```yaml
---
kind: service
metadata:
  name: api
  description: Exposes a REST api and websocket endpoint for desktop
spec:
  host: node
  main: api.asar
  options:
    host: localhost
    port: 8282
```

## Building from source

To install all dependencies and build run:

```bash
git clone https://github.com/reactivemarkets/desktop.git
cd desktop
npm ci
npm run build
```
