# Configuration

The configuration takes large design elements from [kubernetes](https://kubernetes.io/docs/reference/). If you're familar with kubernetes you'll recognise some similarities with the structure.

Everything is defined via configuration files, it is recommended to define your application in YAML. This is easier to read, maintain and allows you to group objects into a single file.

## CLI

The [command line interface](/cli) allows you to create a basic configuration file in the current working directory:

```bash
desktop init --name "My Application" --url https://localhost/
```

To run that config file specifiy the [`--file`](/cli/#start-up-run-open) flag:

```bash
desktop --file application.yaml
```

Configuration can be loaded dynamically, locally from a file or from a url:

```bash
desktop -f https://raw.githubusercontent.com/desktop-examples/config/master/examples/single-window.yaml
```
