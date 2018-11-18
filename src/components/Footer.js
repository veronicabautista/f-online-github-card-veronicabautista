import React, { Component } from 'react';
import logoAdalab from '../images/logo-adalab.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img className="logo-adalab" src={logoAdalab} alt="logo Adalab"/>
      </div>
    );
  }
}

export default Footer;