import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Navbar(props) {
  const navbarStyle = {};
  if (props.mode === 'dark') {
    navbarStyle.backgroundColor = 'black';
    navbarStyle.color = 'white';
  } else {
    navbarStyle.backgroundColor = 'white';
    navbarStyle.color = 'black';
  }

  const [text, setText] = useState('Enable dark mode');

  const toggleMode = () => {
    props.toggleMode();
    if (props.mode === 'dark') {
      setText('Enable dark mode');
    } else {
      setText('Enable light mode');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">{props.Homename}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">{props.Aboutname}</a>
            </li>
            
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text}</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Homename: PropTypes.string.isRequired,
  Aboutname: PropTypes.string.isRequired,
  Contactname: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired, // Added mode prop
  toggleMode: PropTypes.func.isRequired // Added toggleMode prop
};

Navbar.defaultProps = {
  title: 'Set the title',
  Homename: 'Set the Home name',
  Aboutname: 'Set the About name',
  Contactname: 'Set the Contact',
  mode: 'dark' // Added default mode prop
}

export default Navbar;
