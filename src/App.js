import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import NavBar from "./Components/NavBar/NavBar";
import Watch from "./Components/watch/Watch";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/watch/:id">
        <Watch />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
