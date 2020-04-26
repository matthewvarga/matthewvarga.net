import React, { Component } from 'react';
import ContactLink from '../contact_link/index';
import styles from './styles.module';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"grid_container " + styles.footer}>
                <div className={styles.links}>
                    <a href={"http://localhost/resume/"} target={"_blank"} className={styles.link}>Resume</a>
                    <a href={"https://www.linkedin.com/in/matthew-varga/"} target={"_blank"} className={styles.link}>LinkedIn</a>
                    <a href={"https://github.com/matthewvarga"} target={"_blank"} className={styles.link}>GitHub</a>
                    <ContactLink className={styles.link} text={"Contact"}/>
                </div>
            </div>
        );
    }
}

export default Footer;