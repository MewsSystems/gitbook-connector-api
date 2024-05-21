import fs from 'node:fs';
import YAML from 'yaml';

export function loadYaml(path) {
  return YAML.parse(fs.readFileSync(path, 'utf8'));
}
