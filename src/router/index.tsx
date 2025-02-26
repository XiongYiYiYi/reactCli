import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

// 导入页面组件
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

// 定义路由配置 - 简化版本，没有嵌套
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

// 创建路由器
const router = createBrowserRouter(routes);

export default router; 