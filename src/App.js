import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Signup';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/signup' element={<Login />}/>
      <Route exact path='/main' element={<Main />}/>
    </Routes>
  );
}

export default App;
