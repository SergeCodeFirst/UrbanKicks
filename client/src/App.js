import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* Navbar */}
        <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/shop">
          <Shop />
        </Route>
      </Switch>
      {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
