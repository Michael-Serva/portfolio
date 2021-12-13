import React, { Component } from "react";

class Project extends Component {
  render() {
    let { name, languages, languagesIcons, source, info, picture } =
      this.props.item;

    return (
      <div className="project">
        <div className="icons">
            {languagesIcons.map(icon => <i key={icon} className={icon}></i> )}
        </div>
      </div>
    );
  }
}

export default Project;
