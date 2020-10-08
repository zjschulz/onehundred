import React, { Component } from 'react';

export default class Four extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        this.lowerCount = this.lowerCount.bind(this);
        this.addCount = this.addCount.bind(this);
    }

    lowerCount(event) {
        event.preventDefault();
        this.setState({
            counter: this.state.counter - 1
        })
    }

    addCount(event) {
        event.preventDefault();
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render () {
        return (
        <div id="Four" className="Four" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <div className="Counter" style={{background: 'white', borderRadius: "10px 10px 0px 0px" }}>Count: {this.state.counter}</div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button onClick={this.lowerCount}>Lower Count</button>
                <button onClick={this.addCount}>Add Count</button>
            </div>
        </div>
        )
    }
}
