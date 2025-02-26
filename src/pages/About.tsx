import React from 'react';
import SimpleNavbar from '../components/SimpleNavbar';
import SimpleFooter from '../components/SimpleFooter';

const About: React.FC = () => {
  return (
    <div className="app-container">
      <SimpleNavbar />
      <main className="main-content">
        <div className="about-container">
          <h1>关于我们</h1>
          <p>这是一个使用React和TypeScript构建的应用程序。</p>
          <div className="about-content">
            <h2>我们的使命</h2>
            <p>我们致力于提供最好的用户体验和高质量的服务。</p>
            
            <h2>我们的团队</h2>
            <p>我们的团队由经验丰富的开发人员组成，他们热衷于创造优秀的产品。</p>
            
            <h2>联系我们</h2>
            <p>如果您有任何问题或建议，请随时联系我们。</p>
            <p>邮箱：contact@example.com</p>
          </div>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
};

export default About; 