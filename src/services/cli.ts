import yargs from 'yargs/yargs';

export type Cli = Awaited<ReturnType<typeof setupCli>>;

export let cli: Cli;

export async function setupCli() {
  const _cli = await yargs(process.argv)
    .option('config', {
      alias: 'c',
      type: 'string',
      default: './config.json5',
      description: 'path of configuration file'
    })
    .parse();
  cli = _cli;
  return _cli;
}


