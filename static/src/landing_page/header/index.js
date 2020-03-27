import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to={"/"} className={styles.link}>contact</Link>
                </div>
            </div>
        );
    }
}

export default Header;