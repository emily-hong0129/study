import axios from "axios";
import React, { Component, useState } from "react";

function Mypage(props){
  const [userId, setUserId] = useState("")
  const [email, setEmail] = useState("")
  const [createdAt, setCreatedAt] = useState("")

  // 1. access token
  const accessTokenRequest = () => {
    axios
      .get("https://localhost:4000/accesstokenrequest", {
        headers: {
          Authorization: `Bearer ${props.accessToken}`
        },
        withCredentials: true
      })
      .then((res) => {
        if(res.data.message !== 'ok'){
          const message = "access token이 만료되어 불러올 수 없습니다. 다시 로그인 해주시기 바랍니다.";
          return (setEmail(message), setCreatedAt(message));
        }
        
        const {createdAt, userId, email} = res.data.data.userInfo
        // Mypage 페이지의 userId, email, and createdAt 상태를 변경
        // this.setState({userId, email, createdAt});  
        setUserId(userId)
        setEmail(email)
        setCreatedAt(createdAt)

        // this.props.issueAccessToken(res.data.data.accessToken);
        props.issueAccessToken(res.data.data.accessToken)
      })
  }
    
  // 2. refresh token
  const refreshTokenRequest = () => {
    axios
      .get("https://localhost:4000/refreshtokenrequest", {
        withCredentials: true
      })
      .then((res) => {
        // console.log(res);
        if(res.data.message !== 'ok'){
          const message = 'refresh token이 만료되어 불러올 수 없습니다. 다시 로그인 해주시기 바랍니다.';
          return (setEmail(message), setCreatedAt(message))
        }

        const {createdAt, userId, email} = res.data.data.userInfo
        // Mypage 페이지의 userId, email, and createdAt 상태를 변경
        // this.setState({userId, email, createdAt});
        setUserId(userId)
        setEmail(email)
        setCreatedAt(createdAt)

        // App 컴포넌트의 accessToken 상태를 변경해야함
        // this.props.issueAccessToken(res.data.data.accessToken)
        props.issueAccessToken(res.data.data.accessToken)
      })
  }

  return (
    <div className='mypageContainer'>
      <div className='title'>Mypage</div>
      <hr />
      <br />
      <br />
      <div>
        안녕하세요. <span className='name'>{userId ? userId : "Guest"}</span>님! jwt 로그인이
        완료되었습니다.
      </div>
      <br />
      <br />
      <div className='item'>
        <span className='item'>나의 이메일: </span> {email}
      </div>
      <div className='item'>
        <span className='item'>나의 아이디 생성일: </span> {createdAt}
      </div>
      <br />
      <br />
      <div className='btnContainer'>
        <button className='tokenBtn red' onClick={accessTokenRequest}>
          access token request
        </button>
        <button className='tokenBtn navy' onClick={refreshTokenRequest}>
          refresh token request
        </button>
      </div>
    </div>
  );
}


/*
class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      email: "",
      createdAt: "",
    };
    this.accessTokenRequest = this.accessTokenRequest.bind(this);
    this.refreshTokenRequest = this.refreshTokenRequest.bind(this);
  }

  accessTokenRequest() {
    // TODO: 상위 컴포넌트인 App에서 받은 props를 이용해 accessTokenRequest 메소드를 구현합니다.
    // access token을 처리할 수 있는 api endpoint에 요청을 보내고, 받은 데이터로 Mypage 컴포넌트의 state (userId, email, createdAt)를 변경하세요
    // 초기 Mypage:
    // state = { userId: "", email: "", createdAt: "" }
    // accessTokenRequest 후 Mypage:
    // state = { userId: "특정유저id", email: "특정유저email", created: "특정유저createdAt" }
    
    // ** 주의사항 **
    // App 컴포넌트에서 내려받은 accessToken props를 authorization header에 담아 요청을 보내야 합니다. 

    axios
      .get("https://localhost:4000/accesstokenrequest", {
        headers: {
          Authorization: `Bearer ${this.props.accessToken}`
        },
        withCredentials: true
      })
      .then((res) => {
        if(res.data.message !== 'ok'){
          const message = "access token이 만료되어 불러올 수 없습니다. 다시 로그인 해주시기 바랍니다.";
          return this.setState({email: message, createdAt: message});
        }
        // console.log(res.data.data.accessToken)
        const {createdAt, userId, email} = res.data.data.userInfo
        this.setState({userId, email, createdAt});  // Mypage 페이지의 userId, email, and createdAt 상태를 변경
        this.props.issueAccessToken(res.data.data.accessToken);
        
      })
  }
    
  refreshTokenRequest() {
    // TODO: 쿠키에 담겨져 있는 refreshToken을 이용하여 refreshTokenRequest 메소드를 구현합니다.
    // refresh token을 처리할 수 있는 api endpoint에 요청을 보내고, 받은 데이터로 2가지를 구현합니다.
    // 1. Mypage 컴포넌트의 state(userId, email, createdAt)를 변경
    // 2. 상위 컴포넌트 App의 state에 accessToken을 받은 새 토큰으로 교환

    axios
      .get("https://localhost:4000/refreshtokenrequest", {
        withCredentials: true
      })
      .then((res) => {
        // console.log(res);
        if(res.data.message !== 'ok'){
          const message = 'refresh token이 만료되어 불러올 수 없습니다. 다시 로그인 해주시기 바랍니다.';
          return this.setState({email: message, createdAt: message})
        }

        const {createdAt, userId, email} = res.data.data.userInfo
        // Mypage 페이지의 userId, email, and createdAt 상태를 변경
        this.setState({userId, email, createdAt});  

        // App 컴포넌트의 accessToken 상태를 변경해야함
        this.props.issueAccessToken(res.data.data.accessToken)
      })
  }

  render() {
    const { userId, email, createdAt } = this.state;
    return (
      <div className='mypageContainer'>
        <div className='title'>Mypage</div>
        <hr />
        <br />
        <br />
        <div>
          안녕하세요. <span className='name'>{userId ? userId : "Guest"}</span>님! jwt 로그인이
          완료되었습니다.
        </div>
        <br />
        <br />
        <div className='item'>
          <span className='item'>나의 이메일: </span> {email}
        </div>
        <div className='item'>
          <span className='item'>나의 아이디 생성일: </span> {createdAt}
        </div>
        <br />
        <br />
        <div className='btnContainer'>
          <button className='tokenBtn red' onClick={this.accessTokenRequest}>
            access token request
          </button>
          <button className='tokenBtn navy' onClick={this.refreshTokenRequest}>
            refresh token request
          </button>
        </div>
      </div>
    );
  }
}
*/


export default Mypage;
