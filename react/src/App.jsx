// src/App.jsx
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Form from './Components/Form'; // Adjust the path based on your project structure

const App = () => {
  return (
    <div>
       <Navbar /> 
 <Routes>
         
      
          <Route path="/form" element={<Form/>} />
     
     
    </Routes>

    </div>
   
  );
};

export default App;
