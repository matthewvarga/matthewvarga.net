import React, { Component } from 'react';
import Project from './project/index';
import alzheimersChildren from './images/alzheimers-children.png';
import crispermeImg from './images/crisperme.png';
import goReactBoilerplate from './images/go-react-boilerplate.png';
import tft from './images/tft.png';
import styles from './styles.module';

class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showAll: false
        }
    }

    toggle() {
        this.setState((prevState, props) => {
            return {
                showAll: !prevState.showAll
            }
        });
    }

    render() {
        return (
            <div className={styles.projects_section}>
                <div className={styles.wave}></div>
                <div className={"grid_container " + styles.projects + " " + (this.state.showAll ? " " : styles.minimized)} id={styles.projects_container}>
                    <Project className={styles.project}
                             image={alzheimersChildren}
                             title={"alzheimers-children.ca"}
                             shortDesc={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                             desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                             url={"https://www.alzheimers-children.ca"}
                             linkText={"Visit Page"}>
                    </Project>
                    <Project className={styles.project}
                             reverse={true}
                             image={crispermeImg}
                             title={"crisperme"}
                             shortDesc={"Boilerplate code for setting up a Go & React webapp with secure user authentication."}
                             desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                             url={"https://github.com/matthewvarga/go-react-boilerplate"}
                             linkText={"Visit Page"}>
                    </Project>
                    <Project className={styles.project}
                             image={goReactBoilerplate}
                             title={"go-react-boilerplate"}
                             shortDesc={"Boilerplate code for setting up a Go & React webapp with secure user authentication."}
                             desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                             url={"https://github.com/matthewvarga/go-react-boilerplate"}
                             linkText={"view on GitHub"}>
                    </Project>
                    <Project className={styles.project}
                             reverse={true}
                             image={tft}
                             title={"tftbuild.co"}
                             shortDesc={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                             desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                             url={"http://www.tftbuild.co"}
                             linkText={"visit page"}>
                    </Project>
                </div>
                {/* show more */}
                <div className={"grid_container " + styles.show_more}>
                    <span className={styles.show_more_line_start}></span>
                    <div className={styles.show_more_btn_container}>
                        <span className={styles.show_more_btn} onClick={() => this.toggle()}>
                            {this.state.showAll ? "show less" : "show more"}
                        </span>
                    </div>
                    <span className={styles.show_more_line_end}></span>
                </div>
            </div>
            
        );
    }
}

export default Projects;