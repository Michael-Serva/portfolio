import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Développeur web PHP</h4>
        <h5>Homypay - Paris</h5>
        <h6>De juillet 2021 à decembre 2021</h6>
        <p>
          Création d’une super app pour la maison au sein de l’entreprise
          Homypay, sous la direction d’un CTO.
        </p>
        <p>Le devloppement s'est fait en PHP avec le framework de Symfony et dans un environement Linux sous Docker.</p>
      </div>
      <div className="exp-2">
        <h4>Conseiller bancaire</h4>
        <h5>La Banque Postale - St Leu La Forêt</h5>
        <h6>Depuis avril 2006</h6>
        <p>
          Deeloppement et valorisation d'un portefeuil commercial de clients
        </p>
      </div>
    </div>
  );
};

export default Experience;
