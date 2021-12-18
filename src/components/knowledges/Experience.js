import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Développeur web PHP</h4>
        <h5>Homypay - Paris</h5>
        <h6>De juillet 2021 à décembre 2021</h6>
        <p>
          Création d’une super app pour la maison au sein de l’entreprise
          Homypay, sous la direction d’un CTO.
        </p>
        <p>Création d'une Marketplace intégrant des partenaires via leurs Api</p>
        <p>Le développement s'est fait en PHP avec le framework de Symfony et dans un environnement Linux sous Docker.</p>
        <p>Méthode agile , utilisation d'un tableau Trello</p>
      </div>
      <div className="exp-2">
        <h4>Conseiller bancaire</h4>
        <h5>La Banque Postale - St Leu La Forêt</h5>
        <h6>Depuis avril 2006</h6>
        <p>
          Développement et valorisation d'un portefeuille commercial de clients
        </p>
      </div>
    </div>
  );
};

export default Experience;


