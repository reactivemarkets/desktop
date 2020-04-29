# Desktop

Desktop is an open source application for managing multi-window, cross-platform desktop applications; providing deployment, configuration, notifications, logging, monitoring...

Desktop builds on the [Electron Framework](https://github.com/electron/electron) as well as many other open source packages including [expressjs](https://github.com/expressjs/express/), [winston](https://github.com/winstonjs/winston) and [yargs](https://github.com/yargs/yargs). The aim is to reuse proven design practices from production systems.

## Aims

* Secure by default
* Extensible
* Maximise developer productivity
* Use battle tested libraries
* Multi-process

## Features

* Cross platform
* Secure sandbox
* Built for developers
* Simple standardised configuration
* Window Layouts
* Notifications
* Cross application messaging

## Quick Start

To install a prebuilt desktop run:

```bash
npm install @reactivemarkets/desktop -g
```

Desktop takes one or many configuration files or urls. See [Configuration](#Configuration) for more details.

To start the application with 2 windows, from urls, run:

```bash
desktop --url=https://google.com --url=https://startpage.com/
```

To add another window run:

```bash
desktop --url=https://duckduckgo.com/
```

## Command Line Usage

Desktop comes with a full command line interface to create configuration and start the application.

For a full list of commands see the built in help:

```bash
desktop --help
```

## Configuration

Applications are defined via configuration files, our preference is to define your application via a YAML file. This is easier to read, maintain and allows you to group all objects into a single file.

The command line interface allows you to create a basic configuration file in the current working directory:

```bash
desktop init --name "My Application" --url https://localhost/
```

To run that config file specifiy the `--file` flag:

```bash
desktop --file application.yaml
```

Configuration can be loaded locally or from a url.

## Building from source

To install all dependencies and build run:

**Note:** To be able to build packages for all platforms you will need to install some dependencies. On mac: `brew install mono fakeroot dpkg wine`

```bash
git clone https://github.com/reactivemarkets/desktop.git
cd desktop
npm ci
npm run build
```
