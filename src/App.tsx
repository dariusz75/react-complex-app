import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexAppToken"))
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

        <Switch>
          <Route path="/" exact>
            {loggedIn ? <Home /> : <HomeGuest />}
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
