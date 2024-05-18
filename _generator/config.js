import { parseArgs } from 'node:util';
import fs from 'node:fs';
import YAML from 'yaml';

const CONFIG_PATH = './config.yaml';

function loadArgs() {
  const parsedArgs = parseArgs({
    options: {
      tags: {
        type: 'string',
        alias: 't',
        multiple: true,
        default: [],
      },
      source: {
        type: 'string',
        alias: 's',
      },
      output: {
        type: 'string',
        alias: 'o',
      },
    },
  });
  const tags =
    parsedArgs.values.tags.length > 0 ? parsedArgs.values.tags : undefined;
  return {
    source: parsedArgs.values.source || undefined,
    output: parsedArgs.values.output || undefined,
    tags,
  };
}

function loadYaml(path) {
  return YAML.parse(fs.readFileSync(path, 'utf8'));
}

export function loadConfig() {
  const args = loadArgs();
  const yamlConfig = loadYaml(CONFIG_PATH);
  const config = {
    oasPath: args.source || yamlConfig.source,
    outputPath: args.output || yamlConfig.output,
    tags: args.tags || yamlConfig.tags || [],
  };
  if (!config.oasPath && !config.outputPath) {
    console.error(
      'Usage: node index.js --source <url-or-path-to-openapi> --output <output-folder> [--tags tag1 [--tags "some tag2"]]'
    );
    throw new Error('Missing required arguments');
  }
  // TODO: This check can be removed after initial migration; if no tags are provided, generator will pick up all tags by default
  if (config.tags.length === 0) {
    throw new Error('No tags specified');
  }
  return config;
}
