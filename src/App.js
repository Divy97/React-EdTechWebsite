import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Feature from './components/home/Feature';
import Header from './components/home/Header';
import Courses from './components/course/Courses';
import Cart from './components/cart/Cart';

import './components/styles.css';
import Login from './components/login/Login';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element=
          {<>
            <Header />
            <Feature />
            <Footer />
          </>} />
          <Route path='/courses' exact element={<Courses/>}/> 
          <Route path='/cart' exact element={<Cart/>}/> 
          <Route path='/login' exact element={<Login/>}/> 
          <Route path='/contactus' exact element={<Contact/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App