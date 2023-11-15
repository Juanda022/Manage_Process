import React from 'react';
import Navbar from './components/Navbar';
import Example from './components/Example';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element = {<Example/>}/>
            <Route path='*' element={<Navigate replace to={"/"}/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
