
import React, { useState } from 'react';
import './App.css';
import './styles/main.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePageComponent from './pages/HomePage';



function App() {
  return (
    <>
      <HomePageComponent />
    </>
  );
}

export default App;
