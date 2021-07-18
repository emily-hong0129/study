import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // 새로 트윗을 작성하고 전송할 수 있게함
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [tweets, setTweets] = useState(dummyTweets);

  const handleButtonClick = (event) => {
    // Tweet button 엘리먼트 클릭시 작동하는 함수
    // 트윗 전송을 가능하게함
    const tweet = {
      id : tweets.length + 1,
      username: userInput,
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content:  message,
      createdAt: new Date().toLocaleDateString('ko-kr'),
      updatedAt: new Date().toLocaleDateString('ko-kr'),
    };
    setTweets([tweet, ...tweets])
  };

  const handleChangeUser = (event) => {
    // Tweet input 엘리먼트에 입력 시 작동하는 함수
    setUserInput(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // weet textarea 엘리먼트에 입력 시 작동하는 함수
    setMessage(event.target.value)
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  value={userInput}
                  // defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange = {handleChangeUser}
                ></input>
                {/* 트윗을 작성할 수 있는 textarea */}
                <textarea
                  type="text"
                  value={message}
                  className="tweetForm__input--message"
                  onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* 트윗 총 개수를 보여줄 수 있는 Counter */}
                  {'total: ' + tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* 작성한 트윗을 전송할 수 있는 button 엘리먼트*/}
              <button 
                className="tweetForm__submitButton"
                value={tweets}
                onClick={handleButtonClick}
              >Tweet!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* 주어진 트윗 목록(dummyTweets) 갯수 */}
        {tweets.map((el) => (
          <Tweet key = {el.id} tweet={el} />
        ))} 
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
