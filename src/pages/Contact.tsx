import React, { useState } from 'react';
import SimpleNavbar from '../components/SimpleNavbar';
import SimpleFooter from '../components/SimpleFooter';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('提交的表单数据:', formData);
    // 这里可以添加表单提交逻辑
    alert('感谢您的留言！我们会尽快回复您。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app-container">
      <SimpleNavbar />
      <main className="main-content">
        <div className="contact-container">
          <h1>联系我们</h1>
          <p>如果您有任何问题或建议，请填写下面的表单联系我们。</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">邮箱</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">留言</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">提交</button>
          </form>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
};

export default Contact; 