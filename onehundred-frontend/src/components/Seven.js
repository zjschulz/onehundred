import React, { Component } from 'react';
import '../style/calculator.css';

export default class Seven extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: ""
        }

    }

    render () {
        return (
        <div className="Seven" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <form>
            <div className="screen"></div>
            </form>
            <div className="buttons">
                <button type="button" className="btn btn-yellow" data-num="*">*</button>
                <button type="button" className="btn btn-yellow" data-num="/">/</button>
                <button type="button" className="btn btn-yellow" data-num="-">-</button>
                <button type="button" className="btn btn-yellow" data-num="+">+</button>
                <button type="button" className="btn btn-grey" data-num=".">.</button>
                <button type="button" className="btn btn-grey" data-num="9">9</button>
                <button type="button" className="btn btn-grey" data-num="8">8</button>
                <button type="button" className="btn btn-grey" data-num="7">7</button>
                <button type="button" className="btn btn-grey" data-num="6">6</button>
                <button type="button" className="btn btn-grey" data-num="5">5</button>
                <button type="button" className="btn btn-grey" data-num="4">4</button>
                <button type="button" className="btn btn-grey" data-num="3">3</button>
                <button type="button" className="btn btn-grey" data-num="2">2</button>
                <button type="button" className="btn btn-grey" data-num="1">1</button>
                <button type="button" className="btn btn-grey" data-num="0">0</button>
                <button type="button" className="btn-equal btn-grey">=</button>
                <button type="button" className="btn-clear btn-grey">C</button>
            </div>
        </div>
        )
    }
}
