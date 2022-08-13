import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Login from './pages/Login';
import Ranking from './pages/Ranking';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/signup' element={<Signup />}/>
      <Route exact path='/main' element={<Main />}/>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/ranking' element={<Ranking />}/>
    </Routes>
  );
}

export default App;
