import React from 'react';
import SimpleNavbar from '../components/SimpleNavbar';
import SimpleFooter from '../components/SimpleFooter';

const Home: React.FC = () => {
  return (
    <div className="app-container">
      <SimpleNavbar />
      <main className="main-content">
        <div className="home-container">
          <h1>首页</h1>
          <p>欢迎来到我们的应用！</p>
          <div className="features">
            <div className="feature">
              <h2>功能一</h2>
              <p>这是我们应用的第一个主要功能。</p>
            </div>
            <div className="feature">
              <h2>功能二</h2>
              <p>这是我们应用的第二个主要功能。</p>
            </div>
            <div className="feature">
              <h2>功能三</h2>
              <p>这是我们应用的第三个主要功能。</p>
            </div>
          </div>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
};

export default Home; 