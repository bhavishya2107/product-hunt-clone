import React from 'react'
// import Header from './components/header'
import './index.css';
// import MainSection from './components/main-section';
import ProductHunt from './components/product-hunt-app';
import Jobs from './components/jobs'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Upcoming from './components/upcoming';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductHunt} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/upcoming" component={Upcoming} />
      </Switch>
    </Router>
  )
}

export default App
