import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Centre d'intérets</h3>
      <ul>
        <li className="hobby"><i className="fas fa-chess"></i><span>Echecs</span></li>
        <li className="hobby"><i className="fas fa-futbol"></i><span>Football - coach et joueur</span></li>
        <li className="hobby"><i className="fas fa-film"></i><span>Cinéma</span></li>
        <li className="hobby"><i className="fas fa-book-reader"></i><span>Manga</span></li>
      </ul>
    </div>
  );
};

export default Hobbies;
