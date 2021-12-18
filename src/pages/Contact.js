import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import Navigation from "../components/Navigation";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Navigation />
        <div className="contactContent m-5 mx-auto my-auto">
          <div className="d-flex justify-content-center m-5">
            <div className="contactBox">
              <span className="text-center mb-3 fs-1 d-block title">
                Contactez-moi
              </span>
              <h1 className="d-flex justify-content-start">
                <i className="fas fa-user-tie me-3"></i> Société Mike Dev
              </h1>
              <CopyToClipboard text="0644005872">
                <h1
                  className="d-flex justify-content-start"
                  onClick={this.handleFlash}
                >
                  <i className="fas fa-mobile-alt me-3"></i>
                  <span>06 44 00 58 72</span>
                </h1>
              </CopyToClipboard>
              <CopyToClipboard text="Servam95@gmail.com">
                <h1
                  className="d-flex justify-content-start"
                  onClick={this.handleFlash}
                >
                  <i className="fas fa-at me-2"></i>
                  <span>Servam95@gmail.com</span>
                </h1>
              </CopyToClipboard>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src="./media/mikedev2.png"
              alt="mikedev"
              className="imgContact"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
