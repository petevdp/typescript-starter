import { logger, ppObj, setupLogger } from './services/logger';
import { setupEnvironment } from './services/environment';
import { setupCli } from './services/cli';
import { config, setupConfig } from './services/config';

export async function main() {
  setupEnvironment();
  await setupCli();
  setupLogger();
  setupConfig();


  logger.info(ppObj(config));
}

