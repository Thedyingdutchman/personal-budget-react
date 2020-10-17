import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Chart from './Chart/Chart';
//import SimplePieChart from './D3JS/PieClass';

//For some reason the text shows up multiple times on each

function App() {
  return ( 
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>

          <Route path="/about">
            <AboutPage/>
          </Route>

          <Route path="/login">
            <LoginPage/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>
          
        </Switch>
      </div>
      <HomePage/>
      <Chart/>
      {/* <SimplePieChart/> */} //Couldnt sync with the Pie Class
      <Footer/>
    </Router>
    
  );
}

export default App;
 