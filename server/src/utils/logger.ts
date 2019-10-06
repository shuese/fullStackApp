import pino from 'pino';

export const logger = pino({
  name: 'fullStackApp',
  level: 'debug',
  prettyPrint: { colorize: true },
});
