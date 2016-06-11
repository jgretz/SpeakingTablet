// import
import axios from 'axios';

// export
export default class {
  constructor(baseURL, token) {
    const config = {
      timeout: 30000,
      baseURL,
    };

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    this.http = axios.create(config);
  }

  get(url, params) {
    return this.http.get(url, { params });
  }

  post(url, body) {
    return this.http.post(url, body);
  }

  put(url, body) {
    return this.http.put(url, body);
  }

  delete(url, params) {
    return this.http.delete(url, { params });
  }
}
