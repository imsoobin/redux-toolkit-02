// import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import LogOut from './components/logout/logout';
import Login from './components/login/login';

function App() {
  const {users} = useSelector((state) => state.users)
  return (
    <div className="App">
      {users ? <LogOut /> : <Login />}
    </div>
  );
}

export default App;
