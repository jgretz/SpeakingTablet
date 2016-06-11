import Http from './http';
import _ from 'lodash';

export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';

const action = (type, payload) => ({ type, payload });

const buildRequest = config => {
  const { authToken, verb, baseUrl, url, data } = config;
  const http = new Http(baseUrl, authToken);

  switch (verb) {
    case GET:
      return http.get(url, data);
    case POST:
      return http.post(url, data);
    case PUT:
      return http.put(url, data);
    case DELETE:
      return http.delete(url);
    default:
      throw new Error(`Verb: ${verb} not known`);
  }
};

export const apiExecutor = config =>
  (dispatch, getState) => {
    const { rootUrl, data, requestType, successType, failureType } = config;
    const { session: { authToken }, urls } = getState();
    const baseUrl = rootUrl || _.find(urls, { default: true }).url;
    const request = buildRequest({ ...config, authToken, baseUrl });

    if (requestType) {
      dispatch(action(requestType, data));
    }

    return request.then(response => {
      dispatch(action(successType, response));

      return response;
    }).catch(err => {
      dispatch(action(failureType, err));

      throw err;
    });
  };
