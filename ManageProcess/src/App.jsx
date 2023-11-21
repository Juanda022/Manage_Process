import React from 'react';
import Navbar from './components/Navbar';
import Example from './components/Example';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"
import Point1 from './pages/Point1';
import Point2 from './pages/Point2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element = {<Example/>}/>
            <Route path='/point1' element={<Point1/>}/>
            <Route path='/point2' element={<Point2/>}/>
            <Route path='*' element={<Navigate replace to={"/"}/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
