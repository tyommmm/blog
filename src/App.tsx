import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import BlogPage from './Pages/BlogPage/BlogPage';
import UserPage from './Pages/UserPage/UserPage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default App;
