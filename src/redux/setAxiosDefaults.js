import axios from 'axios';

function setAxiosDefaults() {
  const token = localStorage.getItem('token');

  axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

export default setAxiosDefaults;
