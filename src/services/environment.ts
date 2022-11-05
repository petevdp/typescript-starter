import dotenv from 'dotenv';
import { z } from 'zod';


const EnvironmentCodec = z.object({
  NODE_ENV: z.string()
});
export type Environment = z.infer<typeof EnvironmentCodec>;
export let environment: Environment;

export function setupEnvironment() {
  dotenv.config();
  environment = EnvironmentCodec.parse(process.env);
}
