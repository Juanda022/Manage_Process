import React from 'react';
import Navbar from './components/Navbar';
import Example from './components/Example';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"
import ProgramAndProcesses from './pages/Program&Processes';
import Creation_TerminationProcesses from './pages/Creation_TerminationProcesses';
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
            <Route path='/Program_Processes' element={<ProgramAndProcesses/>}/>
            <Route path='/CreationProcesses' element={<Creation_TerminationProcesses/>}/>
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
