import React, { Component } from 'react';
import InfoCard from '../info_card';
import IconCode from '../icons/code';
import IconDatabase from '../icons/database';
import IconInfrastructure from '../icons/infrastructure';
import IconEducation from '../icons/education';
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
                            <p>JavaScript (Vue, React, Marko)</p>
                            <p>Webpack, Babel, Jest</p>
                            <p>HTML, SCSS, CSS</p>
                        </InfoCard>
                        <InfoCard icon={<IconDatabase/>} title={"Backend"} icon_placement={"top"} className={"skills_info_card"}>
                            <p>AWS (Cognito, S3, SES)</p>
                            <p>Node (Nuxt, express)</p>
                            <p>MongoDB, MySQL</p>
                            <p>GraphQL (Apollo)</p>
                            <p>Go, PHP</p>
                        </InfoCard>
                        <InfoCard icon={<IconInfrastructure/>} title={"Infrastructure"} icon_placement={"top"} className={"skills_info_card"}>
                            <p>Kubernetes</p>
                            <p>Docker</p>
                            <p>NGINX</p>
                            <p>CircleCI</p>
                        </InfoCard>
                        <InfoCard icon={<IconEducation className={"Education_icon"}/>} title={"Other (School)"} icon_placement={"top"} className={"skills_info_card"}>
                            <p>Python</p>
                            <p>Java</p>
                            <p>C</p>
                        </InfoCard>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;