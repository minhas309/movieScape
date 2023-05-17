import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./forms/login";
import Signup from './forms/signup';
import Navbar from './forms/navbar';

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          </Routes>
        </BrowserRouter>
     </ThemeProvider>
    </>
  );
}

export default App;
