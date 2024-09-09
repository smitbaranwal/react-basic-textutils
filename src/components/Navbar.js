import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      {/* add a button */}
      {/* <button className="btn btn-primary" onClick={props.toggleMode}>Enable Dark Mode</button> */}
      {/* add a button */}
      {/* <button className="btn btn-primary" onClick={props.toggleMode}>Enable Dark Mode</button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                {props.title1} <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.title2}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className='form-check-label' htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
         
        </div>
      </nav>
    </>
  )
}


Navbar.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    titile1: "Home Title"
}