import React, { Component } from 'react';

export default class One extends Component {
  
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const body = document.querySelector('body')
        const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'white', 'cyan', 'orange', 'violet', 'brown']
        const colorIndex= parseInt(Math.random()*colors.length+1)
        body.style.backgroundColor = colors[colorIndex]
    }

    render () {
        return (
        <div className="One" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <button onClick={this.handleClick}>Change Background Color</button>
        </div>
        )
    }
}
