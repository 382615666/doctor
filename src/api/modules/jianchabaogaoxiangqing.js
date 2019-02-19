import axios from 'axios';

export default {
  get (params) {
    return axios.get(`/getLisDetail.action`, {
      params
    });
  }
};
