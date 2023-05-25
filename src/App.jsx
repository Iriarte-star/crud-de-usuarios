import { useState } from 'react';
import UserForm from './componentes/UserForm';
import UserList from './componentes/UserList';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    };

    setUsers([...users, newUser]);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <UserForm
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
      <UserList users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;

