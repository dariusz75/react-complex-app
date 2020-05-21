import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HeaderLoggeOut from "./HeaderLoggedOut";
import HederLoggedIn from "./HeaderLoggedIn";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexAppToken"))
  );

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            ComplexApp
          </Link>
        </h4>
        {loggedIn ? (
          <HederLoggedIn setLoggedIn={setLoggedIn} />
        ) : (
          <HeaderLoggeOut setLoggedIn={setLoggedIn} />
        )}
      </div>
    </header>
  );
};

export default Header;
