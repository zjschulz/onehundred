import React, { Component } from 'react';
import SixA from './SixA';

export default class Six extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {name: "Doughnut", price: 5}
            ]
        }

    }

    showItems() {
        return this.state.items.map((item, index) => <SixA
        key = {index}
        name = {name}
        price = {price}
        />)
    }

    render () {
        return (
        <div className="Six" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
        </div>
        )
    }
}
