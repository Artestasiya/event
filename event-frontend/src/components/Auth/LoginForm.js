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
            localStorage.setItem('role', response.data.role); // ��������� ����
            alert('�������� �����������!');
            navigate('/'); // ������� �� ������� ��������
        } catch (error) {
            alert('������ �����������, ��������� ������.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>����</h2>
            <input
                type="text"
                placeholder="��� ������������"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="������"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">�����</button>
            <p>
                ��� ��������?{' '}
                <button type="button" onClick={onSwitchToRegister}>
                    ������������������
                </button>
            </p>
        </form>
    );
};

export default LoginForm;
