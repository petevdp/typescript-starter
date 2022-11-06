import { readFileSync } from 'fs';
import JSON5 from 'json5';
import { cli } from './cli';
import { z } from 'zod';

export const ConfigCodec = z.object({
  exampleConfigValue: z.string()
});

export type Config = z.infer<typeof ConfigCodec>;
export let config: Config;

export function setupConfig() {
  let configRaw: any = {};
  const textBlob = readFileSync(cli.config, 'utf-8');
  if (textBlob) {
    configRaw = { ...JSON5.parse(textBlob) };
  }
  config = ConfigCodec.parse(configRaw);
}
