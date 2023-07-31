import { Link } from "react-router-dom";
import { ROUTES } from "../../config";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <h1>Form editor</h1>
      </div>
      <div className="right">
        <Link to={ROUTES.ABOUT}>About Project</Link>
        <Link to={ROUTES.ROOT}>Create Form</Link>
        <Link to={ROUTES.FORMS}>View Forms</Link>
        <Link to={ROUTES.NEW_FORMS}>New Renderer</Link>
        <Link to={ROUTES.NEW_FORM_BUILDER}>New Builder</Link>
      </div>
    </nav>
  );
};

export default Navbar;
