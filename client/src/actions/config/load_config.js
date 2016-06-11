import { loadFromStorage, CONFIG_KEY } from '../../support';

export const LOAD_CONFIG_SUCCESS = 'LOAD_CONFIG_SUCCESS';
export const LOAD_CONFIG_FAIL = 'LOAD_CONFIG_FAIL';

export const loadConfig = () =>
  loadFromStorage({
    key: CONFIG_KEY,
    successType: LOAD_CONFIG_SUCCESS,
    failureType: LOAD_CONFIG_FAIL,
  });
