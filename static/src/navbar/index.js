import React, { Component } from 'react';
import Button from '../button';
import './styles';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"navbar grid_container"}>
                <div className={"navbar_content grid_content"}>
                    <Button className={"navbar_btn"} preset={"primary"} fill={"label"} type={"link"} href={"http://matthewvarga.net/resume"}>Resume</Button>
                    <Button className={"navbar_btn"} preset={"primary"} fill={"label"} type={"link"} href={"https://www.linkedin.com/in/matthew-varga/"}>LinkedIn</Button>
                    <Button className={"navbar_btn"} preset={"primary"} fill={"label"} type={"link"} href={"https://github.com/matthewvarga"}>GitHub</Button>
                    <Button className={"navbar_btn"} preset={"primary"} fill={"label"} type={"email"}>Contact</Button>
                </div>
            </div>
        );
    }
}

export default NavBar;