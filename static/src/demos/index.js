import React, { Component } from 'react';
import Carousel from '../carousel';
import Panel from '../carousel/panel';
import Triangle from './triangle';
import crispermeImg from './images/crisperme.png';
import alzheimersImg from './images/alzheimers-children.png';
import tft from './images/tft.png';
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
                    <p className={"demos_desc"}>I have designed, built, and deployed numerous custom websites varying in size, including large-scale applications with automated payment processing and administrative reporting. Regardless of your needs, I can assist you.</p>
                    <Carousel className={"demos_carousel"}>
                    <Panel title={"alzheimers-children.ca"} img={alzheimersImg} desc={"Alzheimers-children.ca is a website designed to reach children of people directly affected by Alzheimer's in hopes to further pursue medical research on the topic. It is a lightweight application built to help spread awareness and collect survey data."}/>
                        <Panel title={"crisperme"} img={crispermeImg} desc={"Crisperme was a Toronto-based startup that aimed to connect students with researchers in their industry, allowing for high-quality scientific paper editing. This application included automated file transfer and payment processing capabilities."}/>
                        <Panel title={"tftbuild.co"} img={tft} desc={"tftbuild.co was an interactive online tool for the initial release version of Team Fight Tactics. It was designed to easily check item builds along with champion synergies, as this data was not initially included in the game."}/>
                    </Carousel>
                    <Triangle className={"demos_angle"}/>
                    <div className={"demos_behind"}/>
                </div>
            </div>
        );
    }
}

export default About;