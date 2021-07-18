import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';

import './App.css';

const App = (props) => {
  return (
    <BrowserRouter> {/* 2개 이상의 태그가 있으면 무조건 태그 하나로 감싸야함 */}
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Switch>
              <Route exact path="/">
                <Tweets />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/mypage">
                <MyPage />
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};
/*
  JSX
  return <div>내용</div>
  HTML이 아닌 JavaScript다 
*/

export default App;
