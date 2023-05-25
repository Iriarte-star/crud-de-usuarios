import React from 'react';

const UserList = ({ users, handleDeleteUser }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="user-card">
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
};

export default UserList;
