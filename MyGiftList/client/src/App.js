import './App.css';
import Header from './components/Header';
import ApplicationViews from './components/ApplicationViews';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ApplicationViews />
      </Router>
    </div>
  );
}

export default App;
