import LocalLogger from './interfaces/LocalLogger.ts';
import * as winston from 'winston';
const logger = new winston.Logger();

export default class LocalLoggerAdapter implements LocalLogger {
  file: string;
  constructor(file:string) {
    this.file = file;
  }
  wrtiteInfo(msg: string): void {
    logger.info(msg)
  }
  writeError(msg: string): void {
    logger.error(msg)
  }
  writeSucces(msg: string): void {
    logger.alert(msg)
  }
}