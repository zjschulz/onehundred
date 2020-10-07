import React, { Component } from 'react';

export default class Eight extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bill: "",
            people: "",
            tip: "0.2"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    render () {
        return (
            <div className="Eight" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
                <h3>Tip Calculator</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="bill"
                    name="bill"
                    placeholder="How Much Was Your Bill ?"
                    value={this.state.bill}
                    onChange={this.handleChange}
                    required></input><p></p>
                    <input
                    type="people"
                    name="people"
                    placeholder="How Many People Sharing The Bill ?"
                    value={this.state.people}
                    onChange={this.handleChange}
                    required></input><p></p>
                    <select
                    id = "tip"
                    type="tip"
                    name="tip"
                    placeholder="How Was Your Service ?"
                    value={this.state.tip}
                    onChange={this.handleChange}>
                        <option value="0.2">Great - 20%</option>
                        <option value="0.1">Good - 10%</option>
                        <option value="0.02">Bad - 2%</option>
                    </select><p></p>
                    <button type="submit">Calculate Tip</button>
                </form>
                Tip Amount {this.state.bill*this.state.tip}
                Total Amount {Number(this.state.bill)+Number(this.state.bill*this.state.tip)}
                Each Person Owes {(Number(this.state.bill)+Number(this.state.bill*this.state.tip))/Number(this.state.people)}
            </div>
        )
    }
}
