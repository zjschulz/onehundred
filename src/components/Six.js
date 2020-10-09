import React, { Component } from 'react';
import SixA from './SixA';
import cake1 from '../images/cake-1.jpeg'
import cake2 from '../images/cake-2.jpeg'
import cake3 from '../images/cake-3.jpeg'
import cupcake1 from '../images/cupcake-1.jpeg'
import cupcake2 from '../images/cupcake-2.jpeg'
import cupcake3 from '../images/cupcake-3.jpeg'
import doughnut1 from '../images/doughnut-1.jpeg'
import doughnut2 from '../images/doughnut-2.jpeg'
import doughnut3 from '../images/doughnut-3.jpeg'
import sweets1 from '../images/sweets-1.jpeg'
import sweets2 from '../images/sweets-2.jpeg'
import sweets3 from '../images/sweets-3.jpeg'

export default class Six extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {name: "Cake 1", type: "Cake", price: 5, image: cake1},
                {name: "Cake 2", type: "Cake", price: 10, image: cake2},
                {name: "Cake 3", type: "Cake", price: 15, image: cake3},
                {name: "Cupcake 1", type: "Cupcake", price: 5, image: cupcake1},
                {name: "Cupcake 2", type: "Cupcake", price: 10, image: cupcake2},
                {name: "Cupcake 3", type: "Cupcake", price: 15, image: cupcake3},
                {name: "Doughnut 1", type: "Doughnut", price: 5, image: doughnut1},
                {name: "Doughnut 2", type: "Doughnut", price: 10, image: doughnut2},
                {name: "Doughnut 3", type: "Doughnut", price: 15, image: doughnut3},
                {name: "Sweets 1", type: "Sweets", price: 5, image: sweets1},
                {name: "Sweets 2", type: "Sweets", price: 10, image: sweets2},
                {name: "Sweets 3", type: "Sweets", price: 15, image: sweets3}
            ],
            filter: "All"
        }

        this.showItems = this.showItems.bind(this);
        this.showAll = this.showAll.bind(this);
        this.showDoughnuts = this.showDoughnuts.bind(this);
        this.showCakes = this.showCakes.bind(this);
        this.showCupcakes = this.showCupcakes.bind(this);
        this.showSweets = this.showSweets.bind(this);
    }

    showItems() {
        if (this.state.filter === "All") {
            return this.state.items.map((item, index) => <SixA
            key = {index}
            name = {item.name}
            price = {item.price}
            image = {item.image}
            />)
        }
        else {
            return this.state.items.filter(item => item.type === this.state.filter).map((item, index) => <SixA
            key = {index}
            name = {item.name}
            price = {item.price}
            image = {item.image}
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

    showCupcakes() {
        this.setState({
            filter: "Cupcake"
        })
    }

    showSweets() {
        this.setState({
            filter: "Sweets"
        })
    }

    render () {
        return (
        <div id="Six" className="Six" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <div style={{alignItems: 'center', display: 'flex', margin: '1rem', flexWrap: "wrap", justifyContent: 'space-around'}}>
                <button onClick={this.showAll}>All</button>
                <button onClick={this.showCakes}>Cakes</button>
                <button onClick={this.showCupcakes}>Cupcakes</button>
                <button onClick={this.showDoughnuts}>Doughnuts</button>
                <button onClick={this.showSweets}>Sweets</button>
            </div>
            <div id="itemcards" style={{display: 'flex', flexWrap: "wrap"}}>{this.showItems()}</div>
        </div>
        )
    }
}
