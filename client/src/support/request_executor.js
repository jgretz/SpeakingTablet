import Http from './http';

export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';

const action = (type, payload) => ({ type, payload });

const buildRequest = config => {
  const { authToken, verb, url, data } = config;
  const http = new Http('', authToken);

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

export const requestExecutor = (config) =>
  (dispatch) => {
    const request = buildRequest(config);

    return request.then((response) => {
      dispatch(action(config.successType, response));

      return response;
    }).catch((err) => {
      dispatch(action(config.failureType, err));

      throw err;
    });
  };
