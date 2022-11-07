import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Link to=""><Home /></Link>
        <Link to="/login"><Login /></Link>
        <Link to="/register"><Register /></Link> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
