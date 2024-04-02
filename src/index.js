import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// ReactDOM.render(
          <Router>
            <Routes>
              <Route path='/'element={<Home/>}/>
              <Route path='/about'element={<About/>}/>
              <Route path='/contact'element={<Contact/>}/>
            </Routes>
          </Router>,

          document.getElementById('root')

);


// reportWebVitals();
