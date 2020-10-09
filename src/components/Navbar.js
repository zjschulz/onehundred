import React from 'react';
import '../style/style.css';

export default class Navbar extends React.Component {

  render() {
    return (
      <div>
        <h1>100 Components of Code</h1>
        <nav className="Navbar">
          <div>
            <a href="#One">One</a>
            <a href="#Two">Two</a>
            <a href="#Three">Three</a>
            <a href="#Four">Four</a>
          </div>
          <div>
            <a href="#Five">Five</a>
            <a href="#Six">Six</a>
            <a href="#Seven">Seven</a>
            <a href="#Eight">Eight</a>
          </div>
        </nav>
      </div>
    )
  }
}
