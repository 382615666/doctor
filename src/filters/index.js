import dayjs from 'dayjs';
export default {
  dateFormat(value, format) {
    return dayjs(value).format(format);
  }
};
