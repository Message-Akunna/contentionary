import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
// app style
import './assets/css/app.css';
// fonts
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/nunito-sans';
// page components
import Home from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;
