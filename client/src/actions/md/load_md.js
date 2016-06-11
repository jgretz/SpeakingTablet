import { requestExecutor, GET } from '../../support';

export const LOAD_MD_SUCCESS = 'LOAD_MD_SUCCESS';
export const LOAD_MD_FAILURE = 'LOAD_MD_FAILURE';

export const loadMd = config =>
  requestExecutor({
    verb: GET,
    url: config.mdAddress,
    successType: LOAD_MD_SUCCESS,
    failureType: LOAD_MD_FAILURE,
  });
