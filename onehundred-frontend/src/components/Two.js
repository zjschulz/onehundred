import React, { Component } from 'react';

export default class Two extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            quote: "",
            author: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        fetch('http://quotes.rest/qod.json')
        .then(response => response.json())
        .then(data => this.setState({
            quote: data.contents.quotes[0].quote,
            author: data.contents.quotes[0].author
        }))
        .catch(err => alert(err))
        //populate a div element with a new quote
    }

    render () {
        return (
        <div className="Two" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <button onClick={this.handleClick}>Generate Quote of the Day</button>
            <span style={{zIndex:'50',fontSize:'0.9em', fontWeight: 'bold'}}>
                <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
                    <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style={{color: '#ccc', marginLeft: '4px', verticalAlign: 'middle'}}>
                    They Said So®
                </a>
            </span>
            <div className="qod" style={{background: 'white'}}>
                <h1>{this.state.quote}</h1>
                <h2>{this.state.author}</h2>
            </div>
        </div>
        )
    }
}
