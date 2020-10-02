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
            ],
            filter: "All"
        }

        this.showItems = this.showItems.bind(this);
        this.showAll = this.showAll.bind(this);
        this.showDoughnuts = this.showDoughnuts.bind(this);
        this.showCakes = this.showCakes.bind(this);

    }

    showItems() {
        if (this.state.filter === "All") {
            return this.state.items.map((item, index) => <SixA
            key = {index}
            name = {item.name}
            price = {item.price}
            />)
        }
        else {
            return this.state.items.filter(item => item.type === this.state.filter).map((item, index) => <SixA
            key = {index}
            name = {item.name}
            price = {item.price}
            />)
        }
    }

    showAll() {
        this.setState({
            filter: "All"
        })
    }

    showDoughnuts() {
        this.setState({
            filter: "Doughnut"
        })
    }

    showCakes() {
        this.setState({
            filter: "Cake"
        })
    }

    render () {
        return (
        <div className="Six" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <button onClick={this.showAll}>All</button><button onClick={this.showDoughnuts}>Doughnut</button><button onClick={this.showCakes}>Cake</button>
        <div id="itemcards" style={{display: 'flex', flexWrap: "wrap"}}>{this.showItems()}</div>
        </div>
        )
    }
}
