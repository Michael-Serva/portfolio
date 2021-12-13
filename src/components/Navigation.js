import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent mb-3">
          <img
            src="./media/profile.jpg"
            alt="profil de Mike"
            className="img-profile"
          />
          <h3 className="d-block">Michaël Serva</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            {" "}
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink exact to="/knowledges" activeClassName="navActive">
              <i className="fas fa-laptop-code"></i>
              <span>Compétences</span>
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>{" "}
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <span data-toggle="tooltip" data-placement="top" title="Linkedin">
              <a
                href="https://www.linkedin.com/in/micha%C3%ABl-serva-b6a79120a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </span>
          </li>
          <li>
            <span data-toggle="tooltip" data-placement="top" title="Whire.me">
              <a
                href="https://www.whire.me/@Mike_Dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-weebly"></i>
              </a>
            </span>
          </li>
          <li>
          <span
              data-toggle="tooltip"
              data-placement="top"
              title="Github"
            >
              <a
                href="https://github.com/Michael-Serva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
          </li>
        </ul>
        <div className="signature">
          <p>&copy; Mikedev - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
