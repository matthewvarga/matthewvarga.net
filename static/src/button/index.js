import React, {Component} from "react";
import './styles';

class Button extends Component {

    constructor(props) {
        super(props);

        this.classes =  (props.className ? props.className + " " : "") +
                        (props.type === "link" ? "link " : "button ") + 
                        (props.preset ? props.preset + " " : "") + 
                        (props.fill ? props.fill + " " : "solid ") + 
                        (props.hoverhighlight == false ? "" : "hover_highlight " ) + 
                        (props.activehighlight == false || props.lift ? "" : "active_highlight ") + 
                        (props.lift ? "lift " : "") + 
                        (props.level ? "level_" + props.level + " " : "")
                    ;
    }

    render() {
        // remove our custom props from being passed into the html button
        let newProps = {...this.props};
        newProps.className = null;
        newProps.fill = null;
        newProps.lift = null;
        newProps.preset = null;
        newProps.hoverhighlight = null;
        newProps.activehighlight = null;
        newProps.level = null;
        newProps.type = this.props.type || "button";

        // if button type is link, render <a/> instead of <button />
        if(newProps.type === "link") {
            newProps.type = null;
            newProps.disabled = undefined;
            newProps.target = this.props.target || "_blank";
            return (
                <a 
                    {...newProps}
                    className={this.classes}
                >
                    {this.props.children}
                </a>
            );
        }

        return (
            <button 
                {...newProps}
                className={this.classes}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;