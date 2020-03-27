import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"grid_container " + styles.navbar}>
                <div className={styles.links}>
                    <Link to={"/"} className={styles.link}>resume</Link>
                    <Link to={"/"} className={styles.link}>linkedin</Link>
                    <Link to={"/"} className={styles.link}>github</Link>
                    <Link to={"/"} className={styles.link}>contact</Link>
                </div>
            </div>
        );
    }
}

export default NavBar;