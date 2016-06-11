import { saveToStorage, CONFIG_KEY } from '../../support';

export const STORE_CONFIG_SUCCESS = 'STORE_CONFIG_SUCCESS';
export const STORE_CONFIG_FAIL = 'STORE_CONFIG_FAIL';

export const saveConfig = config =>
  saveToStorage({
    key: CONFIG_KEY,
    value: config,
    successType: STORE_CONFIG_SUCCESS,
    failureType: STORE_CONFIG_FAIL,
  });
