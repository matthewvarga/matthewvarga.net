import React, {Component} from 'react';

class Triangle extends Component {
    render() {
        return (
            <svg className={this.props.className ? this.props.className : ""} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 700 200" >
                <polygon points="700,0 700,200 100,200" />
            </svg>
       
        )
    }
    
}

export default Triangle;