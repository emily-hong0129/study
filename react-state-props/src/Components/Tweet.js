import React from 'react';
import './Tweet.css';

const Tweet = ({ tweet }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">  {/* 프로필 사진*/}
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            {/* 유저이름 */}
            <span className="tweet__username">{tweet.username}</span>
            {/* 생성일자 */}
            <span className="tweet__createdAt">{parsedDate}</span>
          </div>
        </div>
        <div className="tweet__message">
          {/* 트윗 메세지 */}
          {tweet.content}
        </div>
      </div>
    </li>
  );
};

export default Tweet;
