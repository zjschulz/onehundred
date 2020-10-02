import React, { Component } from 'react';
import SixA from './SixA';

export default class Six extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {name: "Boston Cream", type: "Doughnut", price: 5},
                {name: "Chocolate Cake", type: "Cake", price: 10},
                {name: "Eclair", type: "Doughnut", price: 5},
                {name: "Wedding Cake", type: "Cake", price: 25},
                {name: "Cupcakes", type: "Cake", price: 8},
                {name: "Glazed", tpye: "Doughnut", price: 7}
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
        <div className="Six" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <button>All</button><button>Doughnut</button><button>Cake</button>
            <div id="itemcards" style={{display: 'flex', flexWrap: "wrap"}}>{this.showItems()}</div>
        </div>
        )
    }
}
