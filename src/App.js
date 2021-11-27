import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
