import React from 'react';
import { Outlet } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <div className='grid-background'>
      <Outlet />
    </div>
  )
}

export default App