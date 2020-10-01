import React, { Component } from 'react';

export default class Five extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [1, 2, 3, 4, 5],
            currentindex: 0
        }

        this.leftImage = this.leftImage.bind(this);
        this.rightImage = this.rightImage.bind(this);
    }

    leftImage(event) {
        event.preventDefault();
        if (this.state.currentindex >= 1) {
            this.setState({
                currentindex: this.state.currentindex - 1
            })
        }
        else if (this.state.currentindex === 0) {
            this.setState({
                currentindex: this.state.images.length -1
            })
        }    
    }

    rightImage(event) {
        event.preventDefault();
        if (this.state.currentindex < this.state.images.length - 1) {
            this.setState({
                currentindex: this.state.currentindex + 1
            })
        }
        else if (this.state.currentindex === this.state.images.length -1) {
            this.setState({
                currentindex: 0
            })
        }    
    }

    render () {
        return (
        <div className="Four" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', textAlign: 'center'}}>
            <button onClick={this.leftImage}>Left</button>
            <div className="Counter" style={{background: 'white'}}>{this.state.images[this.state.currentindex]}</div>
            <button onClick={this.rightImage}>Right</button>
        </div>
        )
    }
}
