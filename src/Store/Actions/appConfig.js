import * as constants from '../constants';

/**
 * @param {string} key
 * @param {any} value
 */
export const setAppConfig = (key, value) => ({ type: constants.APP_CONFIG, key, value });
