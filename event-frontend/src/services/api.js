import axios from 'axios';

// Создание экземпляра axios с базовой конфигурацией
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Примерный URL для API
    headers: {
        'Content-Type': 'application/json',
    },
});

// Функция для получения списка событий
export const getEvents = () => {
    return api.get('/events');
};

// Функция для авторизации пользователя
export const loginUser = (credentials) => {
    return api.post('/login', credentials);
};

// Функция для регистрации пользователя
export const registerUser = (userData) => {
    return api.post('/register', userData);
};

// Экспортируем экземпляр api, чтобы использовать его в других местах
export default api;
