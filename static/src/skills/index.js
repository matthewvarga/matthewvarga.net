import React, { Component } from 'react';
import InfoCard from '../info_card';
import IconCode from '../icons/code';
import IconDatabase from '../icons/database';
import IconInfrastructure from '../icons/infrastructure';
import './styles';

class Skills extends Component {

    render() {
        return (
            <div className={"skills grid_container"}>
                <div className={"grid_content"}>
                    <h2 className={"skills_title"}>Technologies</h2>
                    <p>Below are some technologies that I am familiar with and have working experience in.</p>
                    <div className={"skills_content"}>
                        <InfoCard icon={<IconCode/>} title={"Frontend"} icon_placement={"top"} className={"skills_info_card"}>
                            <p>JavaScript (React, Redux, Marko, Jest)</p>
                            <p>SCSS, CSS, HTML</p>
                            <p>Webpack, Babel</p>
                        </InfoCard>
                        <InfoCard icon={<IconDatabase/>} title={"Backend"} icon_placement={"top"} className={"skills_info_card"}>
                            <p>Go (golang)</p>
                            <p>PHP, Node (express)</p>
                            <p>MySQL, MongoDB</p>
                        </InfoCard>
                        <InfoCard icon={<IconInfrastructure/>} title={"Other"} icon_placement={"top"} className={"skills_info_card"}>
                            <p>NGINX, Docker</p>
                            <p>Python, Java, C</p>
                        </InfoCard>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;