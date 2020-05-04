import React, { Component } from 'react';
import InfoCard from '../info_card';
import Button from '../button';
import IconEducation from '../icons/education';
import IconLinkedIn from '../icons/linkedin';
import IconGitHub from '../icons/github';
import IconContact from '../icons/contact';
import './styles';

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"about grid_container"}>
                <div className={"grid_content"}>
                    <h2 className={"about_title"}>About Me</h2>
                    <div className={"about_text_container"}>
                        <p className={"about_text"}>I am a 22 year old Software Developer with a passion for what I do. My interest in software development began at a young age when I would write mods for video games to add my own personal touch, and has continued to grow ever since. I've recently graduated from the University of Toronto Specialist Program in Computer Science. where I was fortunate enough to further pursue this passion.</p>
                        <p className={"about_text"}>When I am not writing code, I love spending time outdoors with my dog, hiking, and going fishing.</p>
                    </div>
                    <div className={"about_cards"}>
                        <InfoCard className={"about_card"} icon={<IconEducation />} title={"University of Toronto"}>
                            <p className={"about_info_card_text"}>Specialist (Co-operative) Program in Computer Science - Comprehensive Stream.</p>
                        </InfoCard>
                        <InfoCard className={"about_card"} icon={<IconLinkedIn />} title={"LinkedIn"}>
                            <p className={"about_info_card_text"}>
                                for a more in-depth overview of my professional experiences, you can view my LinkedIn 
                                <Button preset={"primary"} fill={"label"} type={"link"} className={"about_link"} href={"https://www.linkedin.com/in/matthew-varga/"}> here</Button>.
                            </p>
                        </InfoCard>
                        <InfoCard className={"about_card"} icon={<IconGitHub />} title={"GitHub"}>
                            <p className={"about_info_card_text"}>To view a complete list of my personal projects, you can visit my GitHub page 
                                <Button preset={"primary"} fill={"label"} type={"link"} className={"about_link"} href={"https://github.com/matthewvarga"}> here</Button>.
                            </p>
                        </InfoCard>
                        <InfoCard className={"about_card"} icon={<IconContact />} title={"Contact"}>
                            <p className={"about_info_card_text"}>Are you an employer looking to hire, or in need of a website being built? You can email me by clicking 
                                <Button preset={"primary"} fill={"label"} type={"link"} className={"about_link"} href={""}> here</Button>.
                            </p>
                        </InfoCard>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default About;