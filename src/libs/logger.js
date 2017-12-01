import Transport from 'winston-transport';
import winston from 'winston';

class BrowserConsole extends Transport {
    name = 'BrowserConsoleTransport'

    /*constructor(opts) {
        super(opts);
        //
        // Consume any custom options here. e.g.:
        // - Connection information for databases
        // - Authentication information for APIs (e.g. loggly, papertrail,
        //   logentries, etc.).
        //
    }*/

    log(info, callback) {
        setImmediate( () => {
            this.emit('logged', info);
        });

        switch (info.level){
            case 'error':
                console.error(info);
                break;
            case 'warn':
                console.warn(info);
                break;
            default:
                console.log(info);
                break;
        }

        // Perform the writing to the remote service
        //callback();
    }
}

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new BrowserConsole()
    ]
});

export default logger;