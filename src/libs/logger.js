import Transport from 'winston-transport';
import winston from 'winston';

class BrowserConsole extends Transport {
    log(method, ...params) {
        setImmediate(() => {
            this.emit('logged', method);
        });

        console[method](...params);
    }
}

/**
 * @typedef {object} DerivedLogger
 * @method error
 * @method warn
 * @method info
 * @method debug
 */

/**
 * default winston config
 * exports.levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

 exports.colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'green',
  verbose: 'cyan',
  debug: 'blue',
  silly: 'magenta'
};
 */

/**
 *
 * @type {DerivedLogger}
 */
const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new BrowserConsole()
    ]
});

export default logger;