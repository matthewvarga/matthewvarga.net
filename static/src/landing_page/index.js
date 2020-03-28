import React, { Component } from 'react';
import NavBar from '../navbar/index';
import Header from './header/index';
import Projects from './projects/index';
import Quote from './quote/index';
import styles from './styles.module';

class LandingPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.landing_page}>
                <NavBar/>
                <Header/>
                <Projects/>
                <Quote/>
            </div>
        );
    }
}

export default LandingPage;