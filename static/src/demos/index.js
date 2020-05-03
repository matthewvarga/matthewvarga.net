import React, { Component } from 'react';
import Carousel from '../carousel';
import Panel from '../carousel/panel';
import Triangle from './triangle';
import crispermeImg from './images/crisperme.png';
import alzheimersImg from './images/alzheimers-children.png';
import './styles';

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"demos grid_container"}>
                <div className={"grid_content"}>
                    <h2 className={"demos_title"}>Are you looking to have a website built?</h2>
                    <p className={"demos_desc"}>I have designed, built, and deployed numerous custom websites varrying from simplistic single page designs, to large-scale applications with automated payment processing and administrative reporting. Regardless of your needs, I can assist you.</p>
                    <Carousel className={"demos_carousel"}>
                        <Panel title={"criperme"} img={crispermeImg} desc={"Crisperme is a Toronto-based strartup that aims to connect students with researchers in their industry to aid in editing scientific papers. This application includes automated file transfer and paympent processing capabilities."}/>
                        <Panel title={"alzheimers-children.ca"} img={alzheimersImg} desc={"Crisperme is a Toronto-based strartup that aims to connect students with researchers in their industry to aid in editing scientific papers. This application includes automated file transfer and paympent processing capabilities."}/>
                        <Panel title={"alzheimers-children.ca"} img={crispermeImg} desc={"Crisperme is a Toronto-based strartup that aims to connect students with researchers in their industry to aid in editing scientific papers. This application includes automated file transfer and paympent processing capabilities."}/>
                        <Panel title={"alzheimers-children.ca"} img={alzheimersImg} desc={"Crisperme is a Toronto-based strartup that aims to connect students with researchers in their industry to aid in editing scientific papers. This application includes automated file transfer and paympent processing capabilities."}/>
                    </Carousel>
                    <Triangle className={"demos_angle"}/>
                    <div className={"demos_behind"}/>
                </div>
            </div>
        );
    }
}

export default About;