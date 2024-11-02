import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js'
import Unke from './pages/unke.js'

import './unkeWeb.css';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route index element = {<Home/>}></Route>
  <Route path = '/home' element = {<Home/>}></Route>
  <Route path = '/unke' element = {<Unke/>}></Route>
  </Routes>
  </BrowserRouter>
    </> 
  );
}

export default App;
