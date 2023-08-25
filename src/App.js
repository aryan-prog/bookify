import {Route, Routes} from 'react-router-dom';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//Pages
import RegisterPage from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  );
}

export default App;
