import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class History extends Component{
    state = {
        indices: []
    };

    getValues() {
        var indices = sessionStorage.getItem("indices");
        this.state.indices = indices;
    }

    renderSeenIndexes() {
        var indices = "";
        for (var i in this.state.indices){
            indices += this.state.indices[i];
        }
        return indices;
    }

    render() {
    return (
        <div>
            {this.getValues()}
            
                10 last checked indexes
            
            <p id="history">{this.renderSeenIndexes()}</p>
            <Link to="/FibCal">Back</Link>
            
        </div>
    );
    }
  };

export default History;