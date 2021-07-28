var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // 1
  let URL = [newsURL, weatherURL];  // 먼저 배열형태로 만들어줌
  let req = URL.map(url => fetch(url).then(data => data.json())); // fetch를 사용하여 data를 각각 객체형태로 만들고 배열로 만든다
  return Promise.all(req).then(data => {  // 배열울 객체형태로 반환한다.
    return { news: data[0].data, weather: data[1] };
  });

  // 2
  // return Promise.all([
  //   fetch(newsURL),
  //   fetch(weatherURL)
  // ])
  // .then(([url1, url2]) => Promise.all([url1.json(), url2.json()]))
  // .then (([url1, url2]) => {
  //   return {news: url1.data, weather: url2};
  // })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}