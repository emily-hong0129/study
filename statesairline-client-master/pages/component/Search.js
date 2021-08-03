import { useState } from 'react'

function Search({onSearch}) {
  const [textDestination, setTextDestination] = useState('')

  const handleChange = (e) => {
    setTextDestination(e.target.value.toUpperCase())
  }

  const handleKeyPress = (departure, destination, e) => {
    if (e.type === 'keypress' && e.code === 'Enter') {
      handleSearchClick(departure, destination)
    }
  }

  const handleSearchClick = (departure, destination) => {
    console.log('검색 버튼을 누르거나, 엔터를 치면 search 함수가 실행됩니다')

    onSearch({departure, destination});
  }

  return <fieldset>
    <legend>공항 코드를 입력하고, 검색하세요</legend>
    <span>출발지</span>
    <input id="input-departure" type="text" disabled value="ICN"></input>
    <span>도착지</span>
    <input id="input-destination" type="text" value={textDestination} onChange={handleChange} placeholder="CJU, BKK, PUS 중 하나를 입력하세요" onKeyPress={e => handleKeyPress("ICN", textDestination, e)} />
    {/* 버튼을 클릭하면 Main의 상태변화를 만든다 */}
    <button id="search-btn" onClick={() => handleSearchClick("ICN", textDestination)}>검색</button>
  </fieldset>
}

export default Search