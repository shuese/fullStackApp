import pino from "pino";

export const logger = pino({
  name: "fsa",
  level: "debug",
  prettyPrint: true,
});
