import React from 'react';

const SimpleFooter: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} 我的应用. 保留所有权利.</p>
    </footer>
  );
};

export default SimpleFooter; 