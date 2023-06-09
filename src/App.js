import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./forms/login";
import Signup from './forms/signup';
import Home from './pages/home';
import PassReset from './forms/passreset';
function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/passreset" element={<PassReset />}/>
          </Routes>
        </BrowserRouter>
     </ThemeProvider>
    </>
  );
}

export default App;
