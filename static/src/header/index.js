import React, { Component } from 'react';
import Button from '../button';
import pic from './images/pic.png';
import './styles';

class Header extends Component {
    render() {
        return (
            <div className={"header grid_container"}>
                <div className={"header_content grid_content"}>
                    <div className={"text_container"}>
                        <h1>Matthew Varga</h1>
                        <p className={"text"}>A brief overview of my skills, education, projects, and work experience.</p>
                        <div className={"buttons_container"}>
                            <Button preset={"primary"} fill={"solid"} level={1} type={"link"} href={""}>Contact</Button>
                            <Button preset={"secondary"} fill={"solid"} level={1} hoverhighlight={false} type={"link"} href={"https://github.com/matthewvarga"}>GitHub</Button>
                        </div>
                    </div>
                    <div className={"img_container"}>
                        <img src={pic} className={"picture"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;