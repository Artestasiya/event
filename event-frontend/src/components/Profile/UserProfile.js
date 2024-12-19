import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div>
            <h2>������� ������������</h2>
            <p>���: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;
