import React from 'react';
import axios from 'axios'; //추가 

function Mypage({userinfo, handleLogout}) {

/*
  handler(){
    axios
      .post("https://localhost:4000/signout", {
        'Content-Type': 'application/json',
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
      })
      // .catch((err) => console.log("==============================", err))
  }
*/


  return (
    <>
    {
      userinfo? 
      <div>
        <h1>Mypage</h1>
        <div className="username">{userinfo.username}</div>
        <div className="email">{userinfo.email}</div>
        <div className="mobile">{userinfo.mobile}</div>
        <button className="btn-logout" onClick={handleLogout}>로그아웃버튼</button>
      </div>
      : ''
    }
    </>
  )
}

export default Mypage;