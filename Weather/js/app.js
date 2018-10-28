// 1. Enable user to enter a date
// 2. Return NASA's Picture of the day for that date
document.querySelector('#submit').onclick = function () {
  //variables for API attributes
  let apiKey = "19bDUl7xNf4xU7WyuFHflwRuLF4EstBCziflq6c2";
  let apiURL = "https://data.nasa.gov/api/odata/v4/gvk9-iz74?$select=facility,location,city,state" //nasa api URL

  //function to fetch API info
  fetch(apiURL)

    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      let facilities = response.value
      // grabs url property of JSON file, sets equal to DOM image source
      console.log(response);
      //find weather now and attach it to facilities
      facilities.forEach(function (facility) {
        let long = facility.location.longitude;
        let lat = facility.location.latitude;
        console.log(long);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=aQa3vUJa5wrEVM6St4EHMKJcZUNypvuRb7AkQIxd`)
          .then(res => res.json())
          .then(response => {
            console.log(response);
            console.log(response.main.temp);
            let temp = response.main.temp;
            facility.temp = temp;
            displayFacility(facility)
          })
      })
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("Date must be between June 15, 1995 and the present day. Must also be written in YYYY-MM-DD form.")
    });
}
function displayFacility(facility) {
  let table = document.querySelector('.factable')
  let row = document.createElement('tr')

  row.innerHTML = `
    <td>${facility.facility}</td>
    <td>${facility.city}</td>
    <td>${facility.state}</td>
    <td>${facility.temp}</td>
  `
  table.appendChild(row);
}