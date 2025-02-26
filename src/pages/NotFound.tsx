import React from 'react';
import { Link } from 'react-router-dom';
import SimpleNavbar from '../components/SimpleNavbar';
import SimpleFooter from '../components/SimpleFooter';

const NotFound: React.FC = () => {
  return (
    <div className="app-container">
      <SimpleNavbar />
      <main className="main-content">
        <div className="not-found-container">
          <h1>404</h1>
          <h2>页面未找到</h2>
          <p>抱歉，您访问的页面不存在。</p>
          <Link to="/" className="home-link">返回首页</Link>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
};

export default NotFound; 