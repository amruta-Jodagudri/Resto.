import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Login from './component/Login';
import Menu from './component/Menu';
import Navbar from './component/Navbar';
import Spinner from './component/Spinner';
import Contact from './component/contact';

const App = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer=setTimeout(() => {
      setShowSpinner(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
        <Router>
          <div className="App">
            {showSpinner?(
              <Spinner/>
            ):(
              <div>
                <Navbar/>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/menu' element={<Menu />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/contact' element={<Contact />} />
                  <Route exact path='/login' element={<Login />} />
                </Routes>
              </div>
            )}
          </div>
        </Router>
      );
}

export default App;

