import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div>
            <h2>Профиль пользователя</h2>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;
