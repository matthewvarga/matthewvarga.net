import React, { Component } from 'react';
import Button from '../button';
import IconArrowL from '../icons/arrowL';
import IconArrowR from '../icons/arrowR';
import './styles';

class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            direction: ""
        }
    }

    next() {
        let numPanels = this.props.children.length;
        let newActivePanel = (this.state.activeIndex === numPanels - 1) ? 0 : this.state.activeIndex + 1;

        this.setState({
            activeIndex: newActivePanel,
            direction: "r"
        });
    }

    prev() {
        this.setState((prevState, prevProps) => {
            return {
                activeIndex: (prevState.activeIndex === 0) ? this.props.children.length - 1 : prevState.activeIndex - 1,
                direction: "l"
            };
        });
    }

    loadPanels() {
        let panels = [];
        // only single child, so no need for wrapper 
        if (this.props.children && !this.props.children.length)  return this.props.children;
        
        for(let i = 0; i < this.props.children.length; i++) {

            let classes = (this.state.activeIndex === i ? "carousel_panel carousel_panel_active_" + this.state.direction + " " : "carousel_panel carousel_panel_hidden_"  + this.state.direction + " " );

            panels.push (
                <span className={classes} key={"carousel_panel_" + i}>
                    {this.props.children[i]}
                </span>
            );
        }

        return panels;
    }

    render() {
        // only renders buttons if there is more than 1 panel
        return (
            <div className={"carousel " + (this.props.className ? this.props.className : "")}>
                {this.props.children && this.props.children.length &&
                <Button preset={"primary"} fill={"solid"} level={1} className={"carousel_btn"} onClick={() => this.prev()}>
                    <IconArrowL className={"carousel_btn_icon"}/>
                </Button>}
                <div ref={this.contentRef} className={"carousel_content"}>
                    {this.loadPanels()}
                </div>
                {this.props.children && this.props.children.length &&
                <Button preset={"primary"} fill={"solid"} level={1} className={"carousel_btn"} onClick={() => this.next()}>
                    <IconArrowR className={"carousel_btn_icon"}/>
                </Button>}
            </div>
        );
    }
}

export default Carousel;