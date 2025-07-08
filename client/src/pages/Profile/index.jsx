import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👤 Profile Page</h1>
      {user ? (
        <>
          <p>
            <strong>Name:</strong> {user.fullname || user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.number || 'Not Provided'}
          </p>
          <p>
            <strong>City:</strong> {user.city}
          </p>
          <p>
            <strong>State:</strong> {user.state}
          </p>
        </>
      ) : (
        <p>No user information found.</p>
      )}
    </div>
  );
};

export default Profile;
