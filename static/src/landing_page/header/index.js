import React, { Component } from 'react';
import ContactLink from '../../contact_link/index';
import styles from './styles.module';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"grid_container " + styles.header}>
                <h1 className={styles.name}>Matthew Varga</h1>
                <h3 className={styles.desc}>a brief overview of my work</h3>
                <div className={styles.contact}>
                    <ContactLink className={styles.link}/>
                </div>
            </div>
        );
    }
}

export default Header;