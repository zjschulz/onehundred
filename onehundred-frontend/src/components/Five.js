import React, { Component } from 'react';
import facebook from '../images/icons8-facebook-50.png';
import github from '../images/icons8-github-50.png';
import insta from '../images/icons8-instagram-50.png';
import linkedin from '../images/icons8-linkedin-50.png';
import medium from '../images/icons8-medium-old-50.png';

export default class Five extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [facebook, github, insta, linkedin, medium],
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
        <div className="Five" style={{background: 'lightgrey', borderStyle: 'solid', margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={this.leftImage}>Left</button>
            <img src={this.state.images[this.state.currentindex]} alt="SocialMedia"></img>
            <button onClick={this.rightImage}>Right</button>
        </div>
        )
    }
}
