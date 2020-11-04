import React from "react";
import { Link } from "react-router-dom"; // links need to stay inside router

const Header = () => {
  return (
    <div className="header-pointing-menu">
      <Link to="/" className="item">
        Tutorial Center
      </Link>
      <div className="header-right-menu">
        <Link to="/" className="item">
          All Tutorials
        </Link>
      </div>
    </div>
  );
};

export default Header;
