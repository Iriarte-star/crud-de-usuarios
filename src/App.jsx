import  { useState } from 'react';
import UserForm from './componentes/UserForm';
import UserList from './componentes/UserList';
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h2>Add User</h2>
      <UserForm setUsers={setUsers} />
      
      <h2>User List</h2>
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;



