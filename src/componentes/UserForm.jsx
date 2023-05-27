import  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import "../estilos/UserForm.css"

const UserForm = ({ setUsers }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    };

    try {
      const response = await axios.post('https://users-crud.academlo.tech/users/', newUser);
      setUsers(prevUsers => [...prevUsers, response.data]);

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

UserForm.propTypes = {
  setUsers: PropTypes.func.isRequired
};

export default UserForm;






