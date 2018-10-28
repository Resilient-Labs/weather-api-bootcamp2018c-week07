document.querySelector('form').addEventListener('submit', weather)


//function that allows the user to enter city and country and get back a temp
function weather(e){
  e.preventDefault()
  let city = document.querySelector('#cities').value
  let country = document.querySelector('#countries').value
  console.log(city)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=43df58f55020682bd2c25d15fd090abf&units=imperial`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response.main.temp)
        document.querySelector('#currentTemp').textContent = response.main.temp
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
    //function to display the temp of the city entered


}
