import React, { Component } from 'react';
import '../style/calculator.css';

export default class Seven extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: ""
        }

        this.evaluateDisplay = this.evaluateDisplay.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
    }

    evaluateDisplay () {
        if (Number.isInteger(parseInt(this.state.display.slice(-1))) && Number.isInteger(parseInt(this.state.display.slice(0,1)))) {
            this.setState({
                display: eval(this.state.display)
            })
        }
    }

    clearDisplay () {
        this.setState({
            display: ""
        })
    }

    updateDisplay(event) {
        this.setState({
            display: this.state.display += event.target.value
        })
    }

    render () {
        return (
        <div className="Seven" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <form>
        <div className="screen">{this.state.display}</div>
            </form>
            <div className="buttons">
                <button onClick={this.updateDisplay} type="button" className="btn btn-yellow" value="*">*</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-yellow" value="/">/</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-yellow" value="-">-</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-yellow" value="+">+</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value=".">.</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="9">9</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="8">8</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="7">7</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="6">6</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="5">5</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="4">4</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="3">3</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="2">2</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="1">1</button>
                <button onClick={this.updateDisplay} type="button" className="btn btn-grey" value="0">0</button>
                <button onClick={this.evaluateDisplay} type="button" className="btn-equal btn-grey">=</button>
                <button onClick={this.clearDisplay} type="button" className="btn-clear btn-grey">C</button>
            </div>
        </div>
        )
    }
}
