import React, { Component, useState } from "react";

import Login from "./components/Login";
import Mypage from "./components/Mypage";

function App() {
  // state
  const [login, setLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  //
  const loginHandler = (data)=> {
    // this.setState({isLogin: true})
    // this.issueAccessToken(data.data.accessToken)
    setLogin(true)
    issueAccessToken(data.data.accessToken)
  }

  const issueAccessToken = (token) => {
    // this.setState({accessToken: token})
    setAccessToken(token)
  }
  
  {/* 
    TODO: isLogin 상태에 따라 Mypage 혹은 Login 컴포넌트를 렌더해야합니다.
    알맞은 컴포넌트를 렌더링하는것은 물론, 올바른 props전달하도록 작성하세요.
  */}
  return (
    <div className='App'>
      {login? (
        <Mypage accessToken={accessToken} issueAccessToken={issueAccessToken}/>
      ) : (
        <Login loginHandler = {loginHandler}/>
      )}
    </div>
  )
}


/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      accessToken: "",
    };

    this.loginHandler = this.loginHandler.bind(this);
    this.issueAccessToken = this.issueAccessToken.bind(this);
  }

  
  loginHandler(data) {
    this.setState({isLogin: true})
    this.issueAccessToken(data.data.accessToken)
  }

  issueAccessToken(token) {
    this.setState({accessToken: token})
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div className='App'>
          isLogin? (
            <Mypage accessToken={this.state.accessToken} issueAccessToken={this.issueAccessToken}/>
          ) : (
            <Login loginHandler = {this.loginHandler}/>
          )
        }
      </div>
    );
  }
}
*/

export default App;
