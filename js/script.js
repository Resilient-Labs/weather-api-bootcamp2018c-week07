const cityInput = document.querySelector("#city");
const countryInput = document.querySelector("#country");
const enter = document.querySelector("#enter");
let current = document.querySelector("#current");
let curCity = document.querySelector("#curCity");
let content = document.querySelector(".result");
let deg = document.querySelector("#deg");

let city = "";
let country = "";

enter.addEventListener("submit", function(e){
  e.preventDefault();
  city = cityInput.value;
  country = countryInput.value;
  getWeather();
  cityInput.value= "";
  countryInput.value= "";
});


function getWeather(){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=ca1f9377be877c874bb15f780ecc6425`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      if(response.sys.country == "US"){
        console.log(response)
        let f = ((response.main.temp - 273.15) * 9/5 + 32);
        current.textContent = f.toFixed(1);
        deg.textContent = "F";
        curCity.textContent = city;
        content.style.display = "flex";
      }else{
        let c = (response.main.temp - 273.15);
        current.textContent = c.toFixed(1);
        deg.textContent = "C";
        curCity.textContent = city;
        content.style.display = "flex";
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
