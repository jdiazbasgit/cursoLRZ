var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.countrystatecity.in/v1/countries/IN/states/MH/cities',
  headers: {
    'X-CSCAPI-KEY': 'API_KEY'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});