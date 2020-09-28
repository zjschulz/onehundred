import React, { Component } from 'react';

export default class Two extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            quotes: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //fetch from quote web page or backend to populate state
      }

    handleClick(event) {
        event.preventDefault();
        //populate a div element with a new quote
    }

    render () {
        return (
        <div className="One">
            <button onClick={this.handleClick}>Change Background Color</button>
        </div>
        )
    }
}
