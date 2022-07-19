import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/signup' element={<Login />}/>
    </Routes>
  );
}

export default App;
