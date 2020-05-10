import React from "react";
import "./App.css";

import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <HomeGuest />
        <Footer />
      </>
    </div>
  );
}

export default App;
