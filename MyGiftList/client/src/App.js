import './App.css';
import Header from './components/Header';
import ApplicationViews from './components/ApplicationViews';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { onLoginStatusChange } from "./modules/authManager";
import { Spinner } from "reactstrap"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  
  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn)
  }, []);

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn} />
        <ApplicationViews isLoggedIn={isLoggedIn} />
      </Router>
    </div>
  );
  
}

export default App;
