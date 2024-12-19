import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';  // Страница логина
import HomePage from './pages/HomePage';    // Главная страница
import ProfilePage from './pages/ProfilePage';  // Страница профиля

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />  {/* Страница логина */}
                <Route path="/home" element={<HomePage />} />  {/* Главная страница */}
                <Route path="/profile" element={<ProfilePage />} />  {/* Страница профиля */}
            </Routes>
        </Router>
    );
};

export default App;
