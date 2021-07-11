import React from 'react';
import './App.css';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import Sidebar from './Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* BrowserRouter 컴포넌트를 작성 */}
          <div className="App">
            <main>
              <Sidebar />
              <section className="features">
                {/* Switch와 Route 컴포넌트를 이용하여 경로(path)를 설정,
                    Tweets, Mypage, About 컴포넌트를 연결 */}
                  <Switch>
                    <Route exact path="/">
                      <Tweets />
                    </Route>
                    <Route path="/about">
                      <About/>
                    </Route>
                    <Route path="/mypage">
                      <MyPage />
                    </Route>
                  </Switch>
              </section>
            </main>
          </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
