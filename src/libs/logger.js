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

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new BrowserConsole()
    ]
});

export default logger;