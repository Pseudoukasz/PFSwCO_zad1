import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
import Fib from './Fib';
import Home from './Home';
import History from './History';



function App() {
  
      return (
        <Router>
          <div className="App">
            <header className="App-header">
              
              
              <Route exact path="" component={Home} />
            <div>
            
              <Route path="/fibCal" component={Fib} />
              <Route path="/documentation" component={Documentation} />
              <Route exact path="/history" component={History} />
            </div></header>
          </div>
          
        </Router>
      );
      
    }

export default App;
