import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";

import './global.css'
import Home from './pages/Home/Home'
import ErrorPage from './pages/Error/ErrorPage';
import BackToTop from './components/BackToTop/BackToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className=''>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <BackToTop/>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
