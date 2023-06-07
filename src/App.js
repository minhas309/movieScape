import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./forms/login";
import Signup from './forms/signup';
import Post from './componenets/post';
import Navbar from './componenets/navbar';
import Postfor from './componenets/postformat';

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Postfor />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          </Routes>
        </BrowserRouter>
     </ThemeProvider>
    </>
  );
}

export default App;
