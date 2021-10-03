import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import axios from "axios";

class App extends React.Component {
  // constructor(props){
  //   super(props)
    state = {
      isLogin: true,
      userinfo: null,
    };

  //   this.handleResponseSuccess = this.handleResponseSuccess(this);
  //   this.handleLogout = this.handleLogout(this);
  // }

  handleResponseSuccess() {
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
    axios
      .get('https://localhost:4000/user', {withCredentials: true})
      .then((res) => {
        // console.log("========================", res)
      
        this.setState({isLogin: true, userinfo:res.data});
        this.props.history.push('이동할 링크');
        this.props.history.push("/mypage")
      })
  }

  // 로그아웃 구현
  handleLogout() {
    this.setState({isLogin: false})

  }

  render() {
    const { isLogin } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path='/login'
            render={() => (
              <Login handleResponseSuccess={this.handleResponseSuccess} />
            )}
          />

          <Route exact path='/signup' render={() => <Signup />} />

          <Route
            exact
            path='/mypage'
            render={() => <Mypage handleLogout={this.handleLogout}/>}
          />

          <Route
            path='/'
            render={() => {
              if (isLogin) {
                return <Redirect to='/mypage' />;
              }
              return <Redirect to='/login' />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);


/*
import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import axios from "axios";

class App extends React.Component {
  state = {
    isLogin: true,
    userinfo: null,
  };

  handleResponseSuccess() {
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
  }

  render() {
    const { isLogin, userinfo } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path='/login'
            render={() => (
              <Login handleResponseSuccess={this.handleResponseSuccess.bind(this)} />
            )}
          />
          <Route exact path='/signup' render={() => <Signup />} />
          <Route
            exact
            path='/mypage'
            render={() => <Mypage />}
          />
          <Route
            path='/'
            render={() => {
              if (isLogin) {
                return <Redirect to='/mypage' />;
              }
              return <Redirect to='/login' />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);


*/