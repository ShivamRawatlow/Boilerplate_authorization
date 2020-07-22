import axios from 'axios';

const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_BaseUrl,
    responseType: 'json',
    withCredentials: true,
  };

  //@ts-ignore
  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    return config;
  });
  return instance;
};

export default fetchClient();
