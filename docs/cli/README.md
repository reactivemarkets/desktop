# Introduction

Desktop comes with a full command line interface to create configuration, start applications, and query state.

## Usage

```bash
Usage: Desktop COMMAND [OPTIONS]

A multi-window desktop runtime.

Commands:
  Desktop clear [area]     Clear the cache and storage data
  Desktop describe [uid]   Show details of a specific instance
  Desktop devTools [uid]   Open the windows devTools
  Desktop hide [uid]       Hide a visible window
  Desktop info             Show the system information
  Desktop init             Create a configuration file
  Desktop kill [uid...]    Kill one or more running instances
  Desktop logs             Fetch the logs of an instance
  Desktop ps               List instances
  Desktop restart [uid...] Restart one or more running instances
  Desktop show [uid]       Show a hidden window
  Desktop shutdown         Shutdown desktop
  Desktop start            Start the application with the specified config
  Desktop stop [uid...]    Stop one or more running instances
  Desktop version          Show the Desktop version information

Options:
  --help         Show help
  --config       Path to JSON config file
  --context, -c  Name of the context to connect to.
  --version      Show version number
  --file, -f     A configuration file or directory to load from
  --url, -u      A url to run with

Run "Desktop COMMAND --help" for more information on a command.
```
