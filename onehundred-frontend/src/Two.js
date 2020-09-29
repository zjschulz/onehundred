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
        //https://blog.hubspot.com/sales/famous-quotes
        fetch('https://blog.hubspot.com/sales/famous-quotes')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => alert(err))
      }

    handleClick(event) {
        event.preventDefault();
        //populate a div element with a new quote
    }

    render () {
        return (
        <div className="One">
            <button onClick={this.handleClick}>Generate New Quote</button>
        </div>
        )
    }
}
