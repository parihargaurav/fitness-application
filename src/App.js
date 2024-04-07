import React from 'react';
import { Route, Routes } from 'react-router-dom';
//  use to route between home page and exercise db page

import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto"> 
   {/*this website is responsive on larger devices   */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      {/* dynamically rendered ids :id */}
    </Routes>
    <Footer />
  </Box>
);

export default App;