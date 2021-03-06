import React, { Component } from 'react';
import NavBar from '../navbar';
import Header from '../header';
import About from '../about';
import Skills from '../skills';
import Demos from '../demos';
import Footer from '../footer';
import './styles';

class LandingPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <Header/>
                <About/>
                <Skills/>
                <Demos/>
                <div className={"landing_page_spacer"}/>
                <Footer/>
            </div>
            
        );
    }
}

export default LandingPage;