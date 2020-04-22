import axios from 'axios';

// Configs
axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.REQUEST_FROM_CLIENT = process.env.REQUEST_FROM_CLIENT;
axios.defaults.withCredentials = true; // important for backend req.user
export default axios;
export const createRequest = (url = '', returnOnlyData = true) => {
  return (data) => {
    const p = axios({
      ...data,
      url: url.concat(data.url)
    });

    if (returnOnlyData) {
      return p.then(d => d.data);
    } else {
      return p;
    }
  };
};

