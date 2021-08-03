import flightList from '../resource/flightList'
import fetch from 'node-fetch'

if (typeof window !== "undefined") {
  localStorage.setItem('flight', JSON.stringify(flightList));
}

export function getFlight(filterBy = {}) {
  return fetch(`http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?departure=ICN&destination=${filterBy.destination}`)
    .then(resp => resp.json()) 

  // let json = []
  // if (typeof window !== "undefined") {
  //   json = localStorage.getItem("flight");
  // }
  // const flight = JSON.parse(json) || [];

  // return new Promise((resolve) => {
  //   const filtered = flight.filter((flight) => {  // Main의 filter부분역할
  //     let condition = true;
  //     if (filterBy.departure) {
  //       condition = condition && flight.departure === filterBy.departure
  //     }
  //     if (filterBy.destination) {
  //       condition = condition && flight.destination === filterBy.destination
  //     }
  //     return condition;
  //   })

  //   setTimeout(() => {  // setTimeout을 사용하려면 promise를 사용해야함
  //     resolve(filtered)
  //   }, 500);
  // });
}