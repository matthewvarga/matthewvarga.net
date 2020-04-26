import React, { Component } from 'react';
import ContactLink from '../contact_link/index';
import styles from './styles.module';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"grid_container " + styles.navbar}>
                <div className={styles.links}>
                    <a href={"http://localhost/resume"} target={"_blank"} className={styles.link}>resume</a>
                    <a href={"https://www.linkedin.com/in/matthew-varga/"} target={"_blank"} className={styles.link}>linkedin</a>
                    <a href={"https://github.com/matthewvarga"} target={"_blank"} className={styles.link}>github</a>
                    <ContactLink className={styles.link} />
                </div>
            </div>
        );
    }
}

export default NavBar;