import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo, //on change l'etat de showinfo à chaque click
    });
  };
  render() {
    let { name, languages, languagesIcons, source, info, picture } =
      this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i key={icon} className={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <a href={source} target="_blank"> <img src={picture} alt={name} /></a>
       
        <span className="infos" onClick={this.handleInfo}>
          <i
            className={
              this.state.showInfo ? "fas fa-times-circle" : "fas fa-plus-circle"
            }
          ></i>
        </span>
      </div>
    );
  }
}

export default Project;
