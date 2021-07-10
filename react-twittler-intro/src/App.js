import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';

console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* 메세지 아이콘 */}
      <i className="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          { /* dummyTweet로 전달되는 데이터의 갯수를 보여준다. */}
          total: {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  // 시멘틱 엘리먼트 footer
  return <footer>Copyright @ 2021 Code States</footer>;
};

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        const isParkHacker = tweet.username === 'parkhacker';
        const tweetUserNameClass = isParkHacker
        ? 'tweet__username tweet__username--purple'
        : 'tweet__username';

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* 트윗 저자의 프로필 사진 */}
              <img src={tweet.picture}></img>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {/* 유져 이름 */}
                <span className={tweetUserNameClass}>{tweet.username}</span>
                {/* 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿈 */}
                <span className="tweet__createdAt">{tweet.createdAt}</span>
                {/* 트윗 생성 일자 */}
              </div>
              {/* 트윗 메세지 */}
              <div className="tweet__message">{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
    </section>
  );
};
// 자식도 후손 컴포넌트

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar /> 
        <Features />
      </main>
    </div>
  );
};
// Sidebar 가 브라우저에서 왼쪽에 있기때문에 Features 위에 있음


export { App, Sidebar, Counter, Tweets, Features, Footer };
