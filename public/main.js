let city = document.querySelector('.typed')

const createProperSearch = () => {
  let typedName = city.value
  const url = `http://api.openweathermap.org/data/2.5/weather`
  const apikey = '2048ce2abc2770f983e18462cfa5007a'
  const newUrl =
    url + '?' + 'q=' + typedName + '&units=imperial' + '&appid=' + apikey
  return newUrl
}

const getConditions = () => {
  fetch(createProperSearch())
    .then(response => {
      return response.json()
    })
    .then(city => {
      console.log(city)
      document.querySelector('.conditions').textContent = city.weather[0].main
      document.querySelector('.city-temps').textContent = city.main.temp
    })
}

document.querySelector('.search').addEventListener('click', getConditions)

// document.addEventListener('DOMContentLoaded', main)
