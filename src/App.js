import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./forms/login";
import Signup from './forms/signup';

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <CssBaseline/>
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
