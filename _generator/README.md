# OpenAPI Spec to Markdown Generator

This is a tool for generating Markdown documentation from an OpenAPI spec.

## Setup

1. Make sure you have [Node.js](https://nodejs.org/) v20 (or later) and `npm` installed
2. In `_generator` run `npm install`

## Usage

Without providing any arguments, the generator will pick up the configuration from [config.yaml](config.yaml) file.

```shell
# cd _generator
node index.js
```

Alternatively, you can override individual or all configuration arguments via CLI:

```shell
node index.js --source https://api.mews.com/swagger/connector/swagger.yaml --output some/alternative/output/path --tags bills --tags accounts
```
