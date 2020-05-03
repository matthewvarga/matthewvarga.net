import React, { Component } from 'react';
import Curve from './curve';
import './styles';

class Panel extends Component {
    render() {
        return (
            <div className={"panel " + (this.props.className ? this.props.className : "")}>
                <div className={"panel_img_container"}>
                    <img src={this.props.img} className={"panel_img"}/>
                    <Curve className={"panel_curve"}/>
                </div>
                <div className={"panel_text_container"}>
                    <h3 className={"panel_title"}>{this.props.title}</h3>
                    <p className={"panel_text"}>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default Panel;