import React, { useState } from 'react';
import Login from './components/Login';
import Mypage from './components/Mypage';


function App() {
  const [login, setLogin] = useState(false)
  const [userData, setUserData] = useState(null)

  const loginHandler = () => {
    setLogin(true)
  }

  const logoutHandler = () => {
    setLogin(false)
  }

  const setUserInfo = (object) => {
    setUserData(object)
  }


  return (
    <div className='App'>
      {login ? (
        <Mypage
          logoutHandler={logoutHandler}
          userData={userData}
        />
      ) : (
          <Login
            loginHandler={loginHandler}
            setUserInfo={setUserInfo}
          />
        )}
    </div>
  );
}
export default App; 