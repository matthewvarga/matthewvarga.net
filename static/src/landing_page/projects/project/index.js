import React, { Component } from 'react';
import styles from './styles.module';

class Project extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"grid_container " + styles.project + " " + (this.props.reverse ? styles.reverse: " ") + " " + (this.props.className ? this.props.className : " ")}>
                <div className={styles.preview}>
                    <img className={styles.img} src={this.props.image}></img>
                </div>
                <div className={styles.desc}>
                    <h1 className={styles.text}>{this.props.title}</h1>
                    <h2 className={styles.text}>{this.props.shortDesc}</h2>
                    <p className={styles.text}>{this.props.desc}</p>
                    <a className={styles.btn} href={this.props.url} target={"_blank"}>{this.props.linkText}</a>
                </div>
            </div>
            
        );
    }
}

export default Project;