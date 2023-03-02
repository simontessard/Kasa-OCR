import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import Location from './pages/Location'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />

      <Switch> 
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/location/:id">
                <Location />
            </Route>
            <Route>
                <Error />
            </Route>
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>
)