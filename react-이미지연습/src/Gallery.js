import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
// 이미지 데이터
import dummy from './dummy';


const Gallery = () =>{
  
  const [state, setState] = useState(dummy[0])  // 고양이 사진이 초기사진임
  // console.log(state);
  // 이미지 클릭시 확대 이미지 보여야함
  const handleImgClick = (event) => { 
    // console.log(event);  // 해당 사진정보 객체가 들어옴
    setState(event);
  }

  return(
    <BrowserRouter>
      {/* 
        작은 이미지 나열,
        이미지 클릭시 해당요소의 사진을 보여주
      */}
      <div>
        {
          dummy.map((el) => {
            return <img className="pic" key={el.id} src={el.picture} onClick={() => handleImgClick(el)}></img>
          })
        }
      </div>
      
      {/* 
      <div className="picture">
        <img src={dummy[0].picture} className="cat" onClick={() => handleImgClick(dummy[0])}></img>
      </div>
      <div className="picture">
        <img src={dummy[1].picture} className="picture1" onClick={() => handleImgClick(dummy[1])}></img>
      </div>
      <div className="picture">
        <img src={dummy[2].picture} className="picture2" onClick={() => handleImgClick(dummy[2])}></img>
      </div> 
      */}
      


      {/* 이미지 보이는 곳 */}
      <ul className="imgs">
        {[state].map((el) => {  // state가 객체기 때문에 대괄호로 감싸 배열처럼 만들어줌
          return <img src={el.picture} key={el.id} />
        })}
      </ul>

    </BrowserRouter>

  )
}

export default Gallery;



