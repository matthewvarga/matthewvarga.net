import React, { Component } from 'react';
import './styles';

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"demos grid_container"}>
                <div className={"grid_content"}>
                    <h2 className={"demos_title"}>Are you looking to have a website built?</h2>
                    <p className={"demos_desc"}>I have designed, built, and deployed numerous custom websites varrying from simplistic single page designs, to large-scale applications with automated payment processing and administrative reporting. Regardless of your need, I can assist you.</p>
                </div>
            </div>
        );
    }
}

export default About;