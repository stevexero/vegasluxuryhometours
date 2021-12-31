import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

import Home from './pages/Home';
import Attributions from './pages/Attributions';

import { MobileMenuProvider } from './MobileMenuContext';

import './App.css';

function App() {
  return (
    <MobileMenuProvider>
      <div className='App'>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <MobileMenu />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/attributions'>
              <Attributions />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </MobileMenuProvider>
  );
}

export default App;
