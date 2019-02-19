import axios from 'axios';
import MintUI from 'mint-ui';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/common' : 'http://111.8.51.2:8089/common';

axios.interceptors.request.use(config => {
  MintUI.Indicator.open({
    text: '加载中...',
    spinnerType: 'snake'
  });
  return config;
}, error => {
  console.error(`axios interceptors request error:${error}`);
});

axios.interceptors.response.use(config => {
  MintUI.Indicator.close();
  if (config.data.resultCode) {
    MintUI.Toast(config.data.resultMsg);
  }
  return config.data;
}, error => {
  MintUI.Indicator.close();
  console.error(`axios interceptors response error:${error}`);
});
