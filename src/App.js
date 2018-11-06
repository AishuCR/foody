import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.js";
import Footer from "./Components/Footer/footer.js";
import About from "./Components/pages/About/about.js";
// import API from './Utils/api';


import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      {/* <API/> */}
      <Footer />
    </div>
  </Router>
);

export default App;
