import React from 'react'

export default class Navbar extends React.Component {

  render() {
    return (
        <div className="Navbar">
        <center><h1>100 Components of Code</h1></center>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="collapse navbar-collapse" style={{display: "flex"}}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a href="#One">One</a></li>
              <li className="nav-item"><a href="#Two">Two</a></li>
              <li className="nav-item"><a href="#Three">Three</a></li>
              <li className="nav-item"><a href="#Four">Four</a></li>
              <li className="nav-item"><a href="#Five">Five</a></li>
              <li className="nav-item"><a href="#Six">Six</a></li>
              <li className="nav-item"><a href="#Seven">Seven</a></li>
              <li className="nav-item"><a href="#Eight">Eight</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
