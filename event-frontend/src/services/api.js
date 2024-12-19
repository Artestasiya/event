import axios from 'axios';

// �������� ���������� axios � ������� �������������
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // ��������� URL ��� API
    headers: {
        'Content-Type': 'application/json',
    },
});

// ������� ��� ��������� ������ �������
export const getEvents = () => {
    return api.get('/events');
};

// ������� ��� ����������� ������������
export const loginUser = (credentials) => {
    return api.post('/login', credentials);
};

// ������� ��� ����������� ������������
export const registerUser = (userData) => {
    return api.post('/register', userData);
};

// ������������ ��������� api, ����� ������������ ��� � ������ ������
export default api;
