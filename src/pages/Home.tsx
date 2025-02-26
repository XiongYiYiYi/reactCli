import React from "react";
import SimpleNavbar from "../components/SimpleNavbar";
import SimpleFooter from "../components/SimpleFooter";
import useStore from "../stores/useStore";

const Home: React.FC = () => {
  // 从 store 中获取状态和方法
  const { bears, increase, decrease, reset } = useStore();
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
            <div className="feature">
              <h1>熊的数量: {bears}</h1>
              <button onClick={() => increase(1)}>增加</button>
              <button onClick={() => decrease(1)}>减少</button>
              <button onClick={reset}>重置</button>
            </div>
          </div>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
};

export default Home;
