import axios from 'axios';

export default {
  get (params) {
    return axios.get(`/getLeaveHospitalRecord.action`, {
      params
    });
  }
};
