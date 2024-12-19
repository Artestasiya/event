import React, { useState } from 'react';
import { loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSwitchToRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ username, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role); // Сохраняем роль
            alert('Успешная авторизация!');
            navigate('/'); // Переход на главную страницу
        } catch (error) {
            alert('Ошибка авторизации, проверьте данные.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Вход</h2>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Войти</button>
            <p>
                Нет аккаунта?{' '}
                <button type="button" onClick={onSwitchToRegister}>
                    Зарегистрироваться
                </button>
            </p>
        </form>
    );
};

export default LoginForm;
