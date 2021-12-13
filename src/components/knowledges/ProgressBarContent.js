import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressBarContent = (props) => {
  return (
    <div className={props.classname}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Années d'expériences</span>
        <span>1 ans</span>
        <span>2 ans</span>
      </div>
      <div>
        {props.languages.map((item) => {
          let xpYears = 2;
          let progressBarContent = (item.xp / xpYears) * 100;
          return (
            <div key={item.id} className="languagesList">
              <li>
                {item.value}
                <ProgressBar now={progressBarContent} />
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBarContent;
