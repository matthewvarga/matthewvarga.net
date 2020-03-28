import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module';

class Quote extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.quote}>
                <h1 className={styles.text}>In need of a website? </h1>
                <h1 className={styles.text}>are you hiring?</h1>
                <Link to={"/"} className={styles.btn}>contact</Link>
            </div>
        );
    }
}

export default Quote;