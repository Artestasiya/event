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
            alert('����������� ������ �������!');
            onSwitchToLogin(); // ������������ �� ����� �����
        } catch (error) {
            alert('������ �����������.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>�����������</h2>
            <input
                type="text"
                placeholder="��� ������������"
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
                placeholder="������"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">������������������</button>
            <p>
                ��� ���� �������?{' '}
                <button type="button" onClick={onSwitchToLogin}>
                    �����
                </button>
            </p>
        </form>
    );
};

export default RegisterForm;
