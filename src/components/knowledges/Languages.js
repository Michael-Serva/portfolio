import React, { Component } from "react";
import ProgressBarContent from "./ProgressBarContent";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "PHP7", xp:1.5},
      { id: 2, value: "HTML5", xp:3},
      { id: 3, value: "CSS3", xp:3},
      { id: 4, value: "Javascript", xp:1},
    ],
    frameworks: [
      { id: 1, value: "Symfony", xp:0.95},
      { id: 2, value: "Bootstrap", xp:1},
      { id: 3, value: "Jquery", xp:0.5},
      { id: 4, value: "Sass", xp:0.2},
      { id: 5, value: "React", xp:0.1},
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
       
         <ProgressBarContent
          languages={languages}
          className="languagesDisplay"
          title="Langages"
        />
        <ProgressBarContent
          languages={frameworks}
          title="Framworks & Library"
          className="framworksDisplay"
        /> 
      </div>
    );
  }
}

export default Languages;
