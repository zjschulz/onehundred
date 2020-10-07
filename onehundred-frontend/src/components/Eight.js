import React, { Component } from 'react';

export default class Eight extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bill: "",
            people: "",
            tip: "0",
            dis: "none",
            calculatedvalues: {
                tip: "",
                total: "",
                owe: ""
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            dis: "",
            calculatedvalues: {
                tip: (this.state.bill*this.state.tip).toFixed(2),
                total: (Number(this.state.bill)+Number(this.state.bill*this.state.tip)).toFixed(2),
                owe: ((Number(this.state.bill)+Number(this.state.bill*this.state.tip))/Number(this.state.people)).toFixed(2)
            }
        });
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
                        <option value="0">Choose...</option>
                        <option value="0.2">Great - 20%</option>
                        <option value="0.1">Good - 10%</option>
                        <option value="0.02">Bad - 2%</option>
                    </select><p></p>
                    <button type="submit">Calculate</button>
                </form><p></p>
                <div style={{display: this.state.dis}}>
                Tip Amount $ {this.state.calculatedvalues.tip}<p></p>
                Total Amount $ {this.state.calculatedvalues.total}<p></p>
                Each Person Owes $ {this.state.calculatedvalues.owe}<p></p>
                </div>
            </div>
        )
    }
}
