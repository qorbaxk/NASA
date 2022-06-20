import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" />

      <Link to="/" className="nav-menu">HOME</Link>
      <Link to="/gallery" className="nav-menu">GALLERY</Link>
      <Link to="/forme" className="nav-menu">FOR ME</Link>
    </div>
  );
};

export default Navigation;
