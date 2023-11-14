import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login';
import Signup from './signup';
import Forgottenpassword from './forgottenpassword';
import Home from './home';


function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgottenpassword'element={<Forgottenpassword/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>

      </>
    </div>
  );
}

export default App;
