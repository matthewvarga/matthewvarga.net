import React, { Component } from 'react';
import Button from '../button';
import './styles';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"footer grid_container"}>
                <div className={"footer_content grid_content"}>
                    <span className={"footer_name"}>Matthew Varga</span>
                    <Button className={"footer_btn"} preset={"secondary"} fill={"label"} type={"link"} href={"http://matthewvarga.net/resume"}>Resume</Button>
                    <Button className={"footer_btn"} preset={"secondary"} fill={"label"} type={"link"} href={"https://www.linkedin.com/in/matthew-varga/"}>LinkedIn</Button>
                    <Button className={"footer_btn"} preset={"secondary"} fill={"label"} type={"link"} href={"https://github.com/matthewvarga"}>GitHub</Button>
                    <Button className={"footer_btn"} preset={"secondary"} fill={"label"} type={"email"}>Contact</Button>
                </div>
            </div>
        );
    }
}

export default Footer;