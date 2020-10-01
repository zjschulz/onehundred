import React, { Component } from 'react';
import ThreeA from './ThreeA';

export default class Three extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            message: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showComments = this.showComments.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            comments: this.state.comments.concat(this.state.message),
            message: ""
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    showComments() {
        return this.state.comments.map((message, index) => <ThreeA
        key = {index}
        message = {message}
        />)
    }

    render () {
        return (
        <div className="Three" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <form onSubmit={this.handleClick}>
                <input
                type="message"
                name="message"
                placeholder="message"
                value={this.state.message}
                onChange={this.handleChange}
                required></input>         
                <button type="submit">Post New Message</button>
            </form>
            {this.showComments()}
        </div>
        )
    }
}
