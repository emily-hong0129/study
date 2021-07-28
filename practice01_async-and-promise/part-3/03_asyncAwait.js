var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // 1
  let url1 = await fetch(newsURL).then(res => res.json())
  let url2 = await fetch(weatherURL).then(res => res.json())

  return { news: url1.data, weather: url2 };

}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}