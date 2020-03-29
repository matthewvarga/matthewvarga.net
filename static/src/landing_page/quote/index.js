import React, { Component } from 'react';
import ContactLink from '../../contact_link/index';
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
                <ContactLink className={styles.btn}/>
            </div>
        );
    }
}

export default Quote;