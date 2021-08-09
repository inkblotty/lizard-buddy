import axios from 'axios';

// todo: pull from env
const BASE_URL = 'http://localhost:8080/api';

const Client = {
  get: (route: string) => axios.get(`${BASE_URL}${route}`),
  post: (route: string) => axios.get(`${BASE_URL}${route}`),
};

export default Client;
