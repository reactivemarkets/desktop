# Desktop Core

The architecture for [Desktop](https://gitlab.com/reactivemarkets/desktop/desktop) is modular with the build combining many asar files into one package.

The Core framework runs in the main electron process is responsible for configuration, launching and orchestration of applications & services.

## Quick Start

Install dependencies and start the application. This will load a url as the configuration.

```bash
npm install
npm run start
```

## Building from source

To install all dependencies and build run:

```bash
git clone https://gitlab.com/reactivemarkets/desktop/core.git
cd core
npm install
npm run build
```
