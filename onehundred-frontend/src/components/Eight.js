import React, { Component } from 'react';

export default class Eight extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: "",
        }

    }

    render () {
        return (
            <div className="Eight" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
                <form>
                    How Much Was Your Bill ?
                    How Many People Sharing The Bill ?
                    How Was Your Service ?
                </form>
            </div>
        )
    }
}
