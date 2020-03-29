import React, { Component } from 'react';
import styles from './styles.module';

class ContactLink extends Component {

    constructor(props) {
        super(props);

        this.contactRef = React.createRef();
    }

    contact(e) {
        let mail = this.contactRef.current

        console.log(mail.href);

        if(mail.href) {
            return;
        }

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
        return (
            <a ref={this.contactRef} 
                target={"_blank"} 
                className={styles.link + " " + (this.props.className ? this.props.className : "")} 
                onClick={(e) => this.contact(e)}
            >
                contact
            </a>
        );
    }
}

export default ContactLink;