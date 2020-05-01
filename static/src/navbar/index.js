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
                    <Button preset={"primary"} fill={"label"} type={"link"} href={"http://localhost/resume"}>Resume</Button>
                    <Button preset={"primary"} fill={"label"} type={"link"} href={"https://www.linkedin.com/in/matthew-varga/"}>LinkedIn</Button>
                    <Button preset={"primary"} fill={"label"} type={"link"} href={"https://github.com/matthewvarga"}>GitHub</Button>
                    <Button preset={"primary"} fill={"label"} type={"link"} href={""}>Contact</Button>
                </div>
            </div>
        );
    }
}

export default NavBar;