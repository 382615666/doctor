import axios from 'axios';
import MintUI from 'mint-ui';

axios.defaults.baseURL = '/common';

axios.interceptors.response.use(config => {
  if (config.data.resultCode) {
    MintUI.Toast(config.data.resultMsg);
  }
  return config.data;
}, error => {
  console.error(`axios interceptors response error:${error}`);
});
