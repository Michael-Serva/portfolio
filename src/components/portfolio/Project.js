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
    let { name, languagesIcons, source, info, picture } =
      this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i key={icon} className={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <a href={source} target="_blank" rel="noreferrer">
          {" "}
          <img src={picture} alt={name} />
        </a>

        <span className="infos" onClick={this.handleInfo}>
          <i
            className={
              this.state.showInfo ? "fas fa-times-circle" : "fas fa-plus-circle"
            }
          ></i>
        </span>
        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <h4>{name}</h4>
              <a href={source} target="_blank" rel="noreferrer" className="text-light">
                <i className="fas fa-external-link-alt"></i>
                <span>{source}</span>
              </a>
              <div className="head">{info}</div>
              <span
                onClick={this.handleInfo}
                className="d-block fs-2 close-modal"
              >
                <i
                  className={
                    this.state.showInfo
                      ? "fas fa-times-circle"
                      : "fas fa-plus-circle"
                  }
                ></i>
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
