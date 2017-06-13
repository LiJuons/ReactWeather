var axios = require('axios');

const OPEN_WEATHER_MAP_URL_1 = 'http://api.openweathermap.org/data/2.5/weather';
const OPEN_WEATHER_MAP_URL_2 = 'units=metric&appid=b56428b2449847e35216d774b4fe2ca6';

module.exports = {
  getTemp: function (city){
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL_1}?q=${encodedCity}&${OPEN_WEATHER_MAP_URL_2}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.message) {
        throw new Error(res.response.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.response.data.message);
    });
  }
}
