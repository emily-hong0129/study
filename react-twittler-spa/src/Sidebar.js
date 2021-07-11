import React from 'react';
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결 */}
        <Link to="/"><i className="far fa-comment-dots"></i></Link>
        <Link to="/about"><i className="far fa-question-circle"></i></Link>
        <Link to="/mypage"><i className="far fa-user"></i></Link>
    </section>
  );
};

export default Sidebar;
