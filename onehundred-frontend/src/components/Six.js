import React, { Component } from 'react';
import SixA from './SixA';

export default class Six extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {name: "Doughnut", price: 5},
                {name: "Cake", price: 10}
            ]
        }

        this.showItems = this.showItems.bind(this);

    }

    showItems() {
        return this.state.items.map((item, index) => <SixA
        key = {index}
        name = {item.name}
        price = {item.price}
        />)
    }

    render () {
        return (
        <div className="Six" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center', display: 'flex'}}>
            {this.showItems()}
        </div>
        )
    }
}
