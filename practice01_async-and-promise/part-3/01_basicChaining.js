var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  return fetch(newsURL)
  .then((response) => response.json())  // json() : response의 메서드
  .then((url1) => {
    return fetch(weatherURL)
    .then((response) => response.json())
    .then((url2) =>{
      return { news: url1.data , weather: url2 };
    })
  })

}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}