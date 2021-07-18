import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import dummyTweets from './static/dummyData';

ReactDOM.render(
  <App dummyTweets={dummyTweets} />,
  document.getElementById('root')
);
/*
  ReactDOM.render
  브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미
  index.html 에서 <div id="root"></div> 
  렌더링된 결과물이 위 div내부에 렌더링 된다
*/
