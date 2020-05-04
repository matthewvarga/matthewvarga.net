import React, {Component} from "react";
import './styles';

class Button extends Component {

    constructor(props) {
        super(props);

        this.emailRef = React.createRef();

        this.classes =  (props.className ? props.className + " " : "") +
                        ((props.type === "link"  || props.type === "email") ? "link " : "button ") + 
                        (props.preset ? props.preset + " " : "") + 
                        (props.fill ? props.fill + " " : "solid ") + 
                        (props.hoverhighlight == false ? "" : "hover_highlight " ) + 
                        (props.activehighlight == false || props.lift ? "" : "active_highlight ") + 
                        (props.lift ? "lift " : "") + 
                        (props.level ? "level_" + props.level + " " : "")
                    ;
    }

    contact(e) {
        
        // if not email, and there is an event listener, propogate event
        if (this.props.type != "email" && this.props.onClick) this.props.onClick(e);
        if (this.props.type != "email") return; // return if not email

        // built email href on click to help prevent web scrapers
        let mail = this.emailRef.current;
        if(mail.href) return;

        e.preventDefault();
        let email = "mailto:";
        email += "matthew";
        email += ".";
        email += "varga";
        email += "@";
        email += "mail";
        email += ".";
        email += "utoronto";
        email += ".ca";
        mail.href = email;
        mail.click();
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
        if(newProps.type === "link" || newProps.type === "email") {
            newProps.type = null;
            newProps.disabled = undefined;
            newProps.target = this.props.target || "_blank";
            return (
                <a 
                    {...newProps}
                    ref={this.emailRef}
                    onClick={(e) => {this.contact(e)}}
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