import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getFlight } from '../api/FlightDataApi'
import FlightList from './component/FlightList'
import LoadingIndicator from './component/LoadingIndicator'
import Search from './component/Search'
import Debug from './component/Debug'

import json from '../resource/flightList'

export default function Main() {
  const [condition, setCondition] = useState({
    departure: 'ICN'
  })
  const [flightList, setFlightList] = useState(json)
  const [isLoading, setIsLoading] = useState(false) 

  const search = ({ departure, destination }) => {
    if (condition.departure !== departure || condition.destination !== destination) {
      console.log('condition 상태를 변경시킵니다')

      // setCondition({...condition, destination: destination})
      // setCondition({departure, destination})
      setCondition({
        departure: departure, destination: destination
      })
    }
  }
  // useEffect(첫번째 전달인자, 두번째 전달인자)
  // useEffect(함수, 3가지가 들어갈 수 있다.)

  // // 1. [] = 한번만 실행하고 싶다면 =componentDidMount
  // useEffect(() => {
  //   console.log('컴포넌트가 마운트 되었습니다')
  // }, [])
  
  // // 2. 두번째 인자가 없다면 매 리렌더마다 실행
  // useEffect(() => {
  //   console.log('컴포넌트가 마운트 되었습니다')
  // })
  //3. [input] => input이 변경됐을때만 실행

  // useEffect
  // getFlight 에 setTimeout API가 있어 useEffect안에서 관리해야함
  useEffect(() => {
    setIsLoading(true)
    // promise 형태로 나옴
    getFlight(condition) // 필터링 조건이 되는 객체를 인자로 넣어줌
    .then((data) => {
      setFlightList(data)
      setIsLoading(false)
    })

  }, [condition]);   // 검색조건이 바뀔때마다 useEffect 실행

  // FlightList : 검색조건에 따라 바뀐다 (상태)

  // getFlight 로 대신 처리 filterBy 부분은 지워야 통과됨

  global.search = search // 실행에는 전혀 지장이 없지만, 테스트를 위해 필요한 코드입니다. 이 코드는 지우지 마세요!

  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          여행가고 싶을 땐, States Airline
        </h1>
        <Search onSearch={search}/> {/* 부모컴포넌트(Main)의 함수가 자식컴포넌트(Search)로 전달되어져야 한다. */}
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          {/* 검색한 데이터를 필터링하여 목록에 나타냄 */}
          {/* <FlightList list={flightList.filter(filterByCondition)} /> */}
          {/* <FlightList list={flightList} /> */}
          {isLoading? <LoadingIndicator/> : <FlightList list={flightList} />}
        </div>

        <div className="debug-area">
          <Debug condition={condition} />
        </div>
      </main>
    </div>
  )
}
