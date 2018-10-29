class Weather {
constructor(city = "Boston", country = "Us", units = "imperial") {
this.apiKey = '2692a4fbe0dc8b3ecbb952734d6a00a9';
this.city = city;
this.country = country;
this.units = units;
this.temp = null;
}
// Fetch weather from API
getWeather(){
// console.log(city);
// console.log(country);
const cityIn = document.querySelector('#city').value;
const countryIn = document.querySelector('#country').value;
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityIn},${countryIn}&units=${this.units}&APPID=${this.apiKey}`;
console.log(url)
return fetch(url)
.then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
.then(response => {
console.log(response);
return response;
})
.catch(err => {
console.log(error, err)
alert("sorry, there are no results for your search")
});
}
// Change weather location
changeLocation(city, country) {
this.city = city;
this.country = country;
}
}
// const submit = document.querySelector('#submit');
// const cityIn = document.querySelector('#city').value;
// const countryIn = document.querySelector('#country').value;
// const weather = new Weather(cityIn, countryIn);
const submit = document.querySelector('form');
submit.addEventListener('submit', (e) => {
e.preventDefault()
const cityIn = document.querySelector('#city').value;
const countryIn = document.querySelector('#country').value;
const theWeather = new Weather(cityIn, countryIn);
const weatherReport = theWeather.getWeather().then(response => {
theWeather.temp = response.main.temp;
const temperature = document.getElementById('temperature');
temperature.innerHTML = theWeather.temp;
console.log('temp', response.main.temp);
});
});
