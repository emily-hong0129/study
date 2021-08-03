import Flight from './Flight'

function FlightList({ list = [] }) {
  if (list.length === 0) {
    return <div className="merge-col">목록이 없습니다</div>
  }
  // Search에서 검색한 목적지에 해당하는 Flight의 태그들과 함께 매핑하는 역할
  return list.map(({ uuid, departure, destination, departure_times, arrival_times }) => {
    return <Flight key={uuid} departure={departure} destination={destination} departureTimes={departure_times} arrivalTimes={arrival_times} />
  })
}

export default FlightList