import axios from 'axios';
const BASEURL = 'https://api.bestbuy.com/v1/products';
const APIKEY = process.env.REACT_APP_BEST_BUY_API_KEY;

export default {
  search: function(searchquery) {
    return axios.get(
      `${BASEURL}((search=${searchquery}))?apiKey=${APIKEY}&pageSize=80&format=json`
    );
  }
};
