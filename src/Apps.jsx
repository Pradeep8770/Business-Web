import React from 'react'
import { Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (<>
  <Navbar/>
    <Switch>
      <Route exact path="/" component = {Home}/>
      <Route exact path="/service" component = {Service}/>
      <Route exact path="/about" component = {About}/>
      <Route exact path="/contact" component = {Contact}/>
    </Switch>
    </>
  )
}

export default App;