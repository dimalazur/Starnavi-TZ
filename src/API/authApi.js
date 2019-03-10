import axios from 'axios';

const getHouseMap = () => (
  axios.get('http://demo4452328.mockable.io/properties')
);

export default {
  getHouseMap,
};