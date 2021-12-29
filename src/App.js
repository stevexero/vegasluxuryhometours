import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

import Home from './pages/Home';
import Attributions from './pages/Attributions';

import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* {menuIsOpen && <MobileMenu />} */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/attributions'>
          <Attributions />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
