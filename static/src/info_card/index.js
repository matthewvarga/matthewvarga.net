import React, { Component } from 'react';
import './styles';

class InfoCard extends Component {

    constructor(props) {
        super(props);

        this.classes = "info_card " + 
                        (this.props.className ? this.props.className + " " : "") +
                        (this.props.icon_placement === "top" ? "info_vert " : "")
                    ;
    }

    render() {
        return (
            <div className={this.classes}>
                <div className={"icon_wrapper"}>{this.props.icon}</div>
                <div className={"info_text_container"}>
                    <h4>{this.props.title}</h4>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default InfoCard;