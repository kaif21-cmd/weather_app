const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80fc965ccdmsh5735b61e94e6fa6p19ed4bjsn09371cfa3cf8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) => {
  cityName.innerHTML = city;
  
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
      if (response ==='404'  ){
        displayError('City not found. Please enter a valid city name.');
        return;
      }
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.max_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
};

const displayError = (errorMsg) => {
  error.innerHTML = errorMsg;
  setTimeout(() => {
    error.innerHTML = '';
  }, 3000);
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);
});
