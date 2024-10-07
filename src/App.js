import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/page';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App mainsize">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
