import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Attributions from './pages/Attributions';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
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
