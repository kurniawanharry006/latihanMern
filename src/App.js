import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import  'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage';
import Checkout from 'pages/Checkout';
import DetailsPage from 'parts/DetailsPage';
import Example from 'pages/Example';



function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
