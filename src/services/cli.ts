import { z } from 'zod';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';


const OptionsCodec = z.object({
  'config': z.string()
});

type Options = Awaited<ReturnType<typeof setupCli>>;

export let options: Options;

export async function setupCli() {
  const cli = await yargs(hideBin(process.argv))
    .option('config', {
      alias: 'c',
      type: 'string',
      default: "./config.json5",
      description: 'path of configuration file'
    })
    .parse();
  cli.options = cli;
  return cli;
}


