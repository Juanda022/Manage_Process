import React from 'react';
import Navbar from './components/Navbar';
import Example from './components/Example';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"
import ProgramAndProcesses from './pages/Program&Processes';
import Point2 from './pages/Point2';
import Status from './pages/Status';
import Hierarchy from './pages/Hierarchy';
import Multiprogramming from './pages/Multiprogramming';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element = {<Example/>}/>
            <Route path='/point1' element={<ProgramAndProcesses/>}/>
            <Route path='/point2' element={<Point2/>}/>
            <Route path='/status' element={<Status/>}/>
            <Route path='/hierarchy' element={<Hierarchy/>}/>
            <Route path='/multiProgramming' element={<Multiprogramming/>}/>
            <Route path='*' element={<Navigate replace to={"/"}/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
