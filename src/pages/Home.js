import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Michaël Serva</h1>
          <h2>Developpeur PHP - Symfony</h2>
          <div className="pdf"><a href="./media/cv-serva-michael.pdf" target="_blank">Télécharger mon CV</a></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
