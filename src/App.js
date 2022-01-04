import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

import Home from './pages/Home';
import Attributions from './pages/Attributions';
import About from './pages/About';
import Book from './pages/Book';

import { MobileMenuProvider } from './MobileMenuContext';

import './App.css';

function App() {
  return (
    <MobileMenuProvider>
      <div className='App'>
        <Navbar />
        <MobileMenu />
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
        </Switch>
        <Footer />
      </div>
    </MobileMenuProvider>
  );
}

export default App;
