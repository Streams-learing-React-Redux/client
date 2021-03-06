import React from "react";
import { Link } from "react-router-dom"; // links need to stay inside router
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="header-pointing-menu">
      <Link to="/" className="item logo">
        Tutorial Center
      </Link>
      <div className="header-right-menu">
        <Link to="/" className="item">
          All Tutorials
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
