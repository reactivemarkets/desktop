---
sidebar: auto
sidebarDepth: 3
---

# Command Line Interface

Desktop comes with a full command line interface to create configuration, start applications, and query state.

## Usage

```bash
Usage: Desktop COMMAND [OPTIONS]

A multi-window desktop runtime.

Commands:
  Desktop clear [area]    Clear the cache and storage data
  Desktop describe [uid]  Show details of a specific instance
  Desktop devTools [uid]  Open the windows devTools
  Desktop hide [uid]      Hide a visible window
  Desktop info            Show the system information
  Desktop init            Create a configuration file
  Desktop kill [uid]      Kill a running instance
  Desktop logs            Fetch the logs of an instance
  Desktop ps              List instances
  Desktop restart [uid]   Restart an instance
  Desktop show [uid]      Show a hidden window
  Desktop start           Start the application with the specified config
  Desktop stop [uid]      Stop a running instance
  Desktop version         Show the Desktop version information

Options:
  --help         Show help
  --config       Path to JSON config file
  --context, -c  Name of the context to connect to.
  --version      Show version number
  --file, -f     A configuration file or directory to load from
  --url, -u      A url to run with

Run "Desktop COMMAND --help" for more information on a command.
```

## Commands

### clear

Clear caches and storage data with the given options.

#### &ndash;&ndash;area `[choices: "auth", "hostResolver", "http", "storageData"]` `[default: "http"]`

The cache area to clear.

#### &ndash;&ndash;authType `[choices: "password", "clientCertificate"]` `[default: "password"]`

The default auth type to clear, only valid when `--area` is set to `auth`.

#### &ndash;&ndash;partition

Specify the session to clear by the partition identifier.

---

### describe

Prints the current details of an instance.

#### &ndash;&ndash;uid `[uid]`

The instance identifier.

#### &ndash;&ndash;output, -o `[choices: "yaml", "json"]` `[default: "yaml"]`

The output format.

---

### devTools

Open a dev tools window for the given identifier.

#### &ndash;&ndash;uid `[uid]`

The instance identifier.

---

### hide

Hide a window.

#### &ndash;&ndash;uid `[uid]`

The instance identifier.

---

### info

Show the system information.

---

### init

Create a template configuration file.

---

### kill

Kill an instance without a clean shutdown.

#### &ndash;&ndash;uid `[uid]`

The instance identifier.

---

### logs

Fetch the logs of an instance.

---

### ps

List all running instances.

---

### restart

Restart a running instance.

#### &ndash;&ndash;uid `[uid]`

The instance identifier.

---

### show

Show a hidden window.

#### &ndash;&ndash;uid `[uid]`

The instance identifier.

---

### start

---

### stop

Stop a running instance.

#### &ndash;&ndash;uid `[uid]`

The instance identifier.

---

### version

Print the version information for the current context.

---
