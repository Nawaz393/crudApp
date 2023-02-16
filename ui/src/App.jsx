import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Add from './Add';
import Home from './Home';
import axios from 'axios';
import Outlit from './components/Outlit';
import 'reactjs-popup/dist/index.css';
// import 'react-loading-overlay/dist/react-loading-overlay.css';
const App = () => {
  axios.defaults.baseURL = 'http://Localhost:3000';
  return (
    <Routes>
      <Route path="" element={<Outlit />} >
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Route>
      
    </Routes>
  );
}

export default App;
