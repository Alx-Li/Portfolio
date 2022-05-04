import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Upload from './components/Upload/Upload'
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Fun from './components/Fun/Fun';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Error from './components/Error/Error';

import theme from './components/Theme/theme';
import Navbar from './components/Navbar/Navbar';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <div style={{height: '4rem'}}></div>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/projects" exact element={<Projects/>}/>
          <Route path="/contact" exact element={<Contact/>}/>         
          <Route path="/fun" exact element={<Fun/>}/>         
          {/*<Route path="/upload" exact element={<Upload/>}/>*/}
          <Route path="/login" element={<Login/>}/>
          <Route path="*" exact element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    
    
  );
};

export default App;
