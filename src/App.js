import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./forms/login";
import Signup from './forms/signup';
import Post from './componenets/post';
import Navbar from './componenets/navbar';


function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          </Routes>
        </BrowserRouter>
     </ThemeProvider>
    </>
  );
}

export default App;
