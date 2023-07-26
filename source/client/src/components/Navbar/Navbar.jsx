import { Link } from "react-router-dom";
import { ROUTES } from "../../config";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="left">Form editor</div>
      <div className="right">
        <Link to={ROUTES.ROOT}>Create Form</Link>
        <Link to={ROUTES.FORMS}>View Forms</Link>
      </div>
    </nav>
  );
};

export default Navbar;
