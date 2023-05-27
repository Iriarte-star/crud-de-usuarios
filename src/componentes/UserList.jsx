
import  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import "../estilos/UserList.css"

const UserList = ({ users, setUsers }) => {
  const [editingUser, setEditingUser] = useState(null);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://users-crud.academlo.tech/users/${id}`);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user.id);
    setEditedFirstName(user.first_name);
    setEditedLastName(user.last_name);
    setEditedEmail(user.email);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setEditedFirstName('');
    setEditedLastName('');
    setEditedEmail('');
  };

  const handleSaveEdit = async () => {
    const updatedUser = {
      first_name: editedFirstName,
      last_name: editedLastName,
      email: editedEmail
    };

    try {
      await axios.put(`https://users-crud.academlo.tech/users/${editingUser}`, updatedUser);
      const updatedUsers = users.map(user => {
        if (user.id === editingUser) {
          return {
            ...user,
            first_name: editedFirstName,
            last_name: editedLastName,
            email: editedEmail
          };
        }
        return user;
      });
      setUsers(updatedUsers);
      setEditingUser(null);
      setEditedFirstName('');
      setEditedLastName('');
      setEditedEmail('');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="user-card">
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
            {editingUser === user.id ? (
              <div>
                <input
                  type="text"
                  value={editedFirstName}
                  onChange={(e) => setEditedFirstName(e.target.value)}
                />
                <input
                  type="text"
                  value={editedLastName}
                  onChange={(e) => setEditedLastName(e.target.value)}
                />
                <input
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired
};

export default UserList;






