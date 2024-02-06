// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Components/Register';
import BookList from './Components/BookList';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
    
 <Routes>
         
        <Route exact path="/" element={<BookList/>} />
        <Route path="/Register" element={<Form/>} />

     
     
    </Routes>

    </div>
   
  );
};

export default App;
