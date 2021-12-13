import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>
          Désolé cette page n'existe pas <i className="fas fa-smile-wink"></i>
        </h3>
        <NavLink exact to="/home">
          <span>Retour sur mon portfolio</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
