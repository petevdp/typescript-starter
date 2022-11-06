import pino from 'pino';


export let logger: ReturnType<typeof pino>;


export function setupLogger() {
  logger = pino();
}
