import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Layout from './Layout';

import HomePage from '@/components/Pages/HomePage';
import AboutPage from '@/components/Pages/AboutPage';
import LoginPage from '@/components/Pages/LoginPage';
import SignupPage from '@/components/Pages/SignupPage';
import ThreadsPage from '@/components/Pages/ThreadsPage';

import { siteConfig } from '@/config/site';
import { NavItem } from '@/types/nav';

const componentMap: { [key: string]: React.ComponentType } = {
  'Home': HomePage,
  'About': AboutPage,
  'Login': LoginPage,
  'Signup': SignupPage,
  'Threads': ThreadsPage,
};

console.log('componentMap', componentMap);
console.log('siteConfig.mainNav', siteConfig.mainNav);

function getRoutes(items: NavItem[]) {
  return items.map(item => {
    const Component = componentMap[item.component];
    if (!Component) {
      console.error(`Component not found for key: ${item.component}`);
      return null;
    }
    return { path: item.path, element: <Component /> };
  }).filter(Boolean); 
}


const router = createBrowserRouter(getRoutes(siteConfig.mainNav));

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
