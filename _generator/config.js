import { parseArgs } from "node:util";
import fs from "node:fs";
import YAML from "yaml";

const CONFIG_PATH = "./config.yaml";

function loadArgs() {
  const parsedArgs = parseArgs({
    options: {
      tags: {
        type: "string",
        alias: "t",
        multiple: true,
        default: [],
      },
      source: {
        type: "string",
        alias: "s",
      },
      output: {
        type: "string",
        alias: "o",
      },
    },
  });

  return {
    source: parsedArgs.source || undefined,
    output: parsedArgs.output || undefined,
    tags: parsedArgs.tags || undefined,
  };
}

function loadYaml(path) {
  return YAML.parse(fs.readFileSync(path, "utf8"));
}

export function loadConfig() {
  const args = loadArgs();
  const yamlConfig = loadYaml(CONFIG_PATH);

  const config = {
    oasPath: args.source || yamlConfig.source,
    outputPath: args.output || yamlConfig.output,
    tags: args.tags || yamlConfig.tags || [],
  };
  console.log(yamlConfig);
  console.log(config);
  if (!config.oasPath && !config.outputPath) {
    console.error(
      'Usage: node index.js --source <url-or-path-to-openapi> --output <output-folder> [--tags tag1 [--tags "some tag2"]]'
    );
    throw new Error("Missing required arguments");
  }
  return config;
}
