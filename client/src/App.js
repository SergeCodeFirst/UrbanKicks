import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ErrorPayment from './pages/ErrorPayment/ErrorPayment';
import SucessPayment from './pages/SucessPayment/SucessPayment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <shoppingCartContext>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/shop">
            <Shop />
          </Route>

          <Route exact path="/success">
            <SucessPayment />
          </Route>

          <Route exact path="/cancel">
            <ErrorPayment />
          </Route>
        </Switch>
        <Footer />
      </shoppingCartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
