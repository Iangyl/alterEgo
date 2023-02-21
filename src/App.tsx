import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const News = lazy(() => import('pages/News'));
const Profile = lazy(() => import('pages/Profile'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
