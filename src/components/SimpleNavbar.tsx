import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SimpleNavbar: React.FC = () => {
  const location = useLocation();
  
  // 判断当前路径是否激活
  const isActive = (path: string) => {
    return location.pathname === path || 
           (path === '/' && (location.pathname === '/' || location.pathname === '/home')) 
           ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">我的应用</Link>
      </div>
      <ul className="navbar-links">
        <li className={isActive('/')}>
          <Link to="/">首页</Link>
        </li>
        <li className={isActive('/about')}>
          <Link to="/about">关于</Link>
        </li>
        <li className={isActive('/contact')}>
          <Link to="/contact">联系</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SimpleNavbar; 