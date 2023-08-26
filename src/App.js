import {Route, Routes} from 'react-router-dom';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//Pages
import RegisterPage from './pages/Register';
import Login from './pages/Login';
import ListingPage from './pages/List';
import Home from './pages/Home';
//Components
import MyNavbar from './components/navbar';


function App() {
  return (
    <div>
      <MyNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/book/list" element={<ListingPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
