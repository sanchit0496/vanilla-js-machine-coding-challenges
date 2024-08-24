const city = document.getElementById('city')
const currentTemp = document.getElementById('current-temp')
const maxTemp = document.getElementById('max-temp')
const minTemp = document.getElementById('min-temp')
const humidity = document.getElementById('humidity')

const getWeatherDetail = async () => {
    const data = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=12&lon=12&appid=bf909b4a90c47e810fc156dc73c0ed75')
    const retData = await data.json()
    return retData
}

(async() => {
    let weatherDetail = await getWeatherDetail()
    console.log(weatherDetail)
    city.textContent = `City: ${weatherDetail.name}`
    currentTemp.textContent = `Temp (f): ${weatherDetail.main.temp}`
    maxTemp.textContent = `Max Temp (f): ${weatherDetail.main.temp_max}`
    minTemp.textContent = `Min Temp (f): ${weatherDetail.main.temp_min}`
    humidity.textContent = `Humidity (f): ${weatherDetail.main.humidity}`
})()
