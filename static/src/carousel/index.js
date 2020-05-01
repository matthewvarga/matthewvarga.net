import React, { Component } from 'react';
import Button from '../button';
import IconArrowL from '../icons/arrowL';
import IconArrowR from '../icons/arrowR';
import './styles';

class Carousel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"carousel " + (this.props.className ? this.props.className : "")}>
                <Button preset={"primary"} fill={"solid"} level={1} className={"carousel_btn"}>
                    <IconArrowL className={"carousel_btn_icon"}/>
                </Button>
                <div className={"carousel_content"}></div>
                <Button preset={"primary"} fill={"solid"} level={1} className={"carousel_btn"}>
                    <IconArrowR className={"carousel_btn_icon"}/>
                </Button>
            </div>
        );
    }
}

export default Carousel;