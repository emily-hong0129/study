import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';

const MyPage = () => {
  // 현재 유져인 parkhacker의 트윗만 보여줌
  const filteredTweets = dummyTweets.filter((tweet) => tweet.username === "parkhacker");

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        <Tweet tweet={filteredTweets[0]}/>
        {/* 현재 유져인 parkhacker의 트윗만 보여줌 */}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
