import React, { useState } from 'react';
import { registerUser } from '../../services/api';

const RegisterForm = ({ onSwitchToLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username, password, email });
            alert('Регистрация прошла успешно!');
            onSwitchToLogin(); // Переключение на форму входа
        } catch (error) {
            alert('Ошибка регистрации.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Зарегистрироваться</button>
            <p>
                Уже есть аккаунт?{' '}
                <button type="button" onClick={onSwitchToLogin}>
                    Войти
                </button>
            </p>
        </form>
    );
};

export default RegisterForm;
