import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderLoggeOut from "./HeaderLoggedOut";
import HederLoggedIn from "./HeaderLoggedIn";

const Header = (props: any) => {
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            ComplexApp
          </Link>
        </h4>
        {props.loggedIn ? (
          <HederLoggedIn setLoggedIn={props.setLoggedIn} />
        ) : (
          <HeaderLoggeOut setLoggedIn={props.setLoggedIn} />
        )}
      </div>
    </header>
  );
};

export default Header;
