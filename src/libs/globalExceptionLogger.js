import logger from './logger';

/**
 * @param {Window} window
 */
function setupHandler(window){
    window.onerror = (...params) => {
        logger.error(...params);
    }
}

export default setupHandler;

