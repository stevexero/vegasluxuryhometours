import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

import Home from './pages/Home';
import Attributions from './pages/Attributions';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';

import { MobileMenuProvider } from './MobileMenuContext';

import './App.css';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <MobileMenuProvider>
      <AnimatePresence exitBeforeEnter>
        <div className='App'>
          <Navbar />
          <MobileMenu />
          <ScrollToTop />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/attributions'>
              <Attributions />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/book'>
              <Book />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/payment'>
              <Payment />
            </Route>
            <Route exact path='/blog'>
              <Blog />
            </Route>
            <Route exact path='/blog/:slug'>
              <SinglePost />
            </Route>
          </Switch>
          <Footer />
        </div>
      </AnimatePresence>
    </MobileMenuProvider>
  );
}

export default App;
