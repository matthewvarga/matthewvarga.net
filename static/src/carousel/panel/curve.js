import React, {Component} from 'react';

class Curve extends Component {
    render() {
        return (
            <svg className={(this.props.className ? this.props.className : "")} viewBox="0 0 112 690">
                <path d="M116 0H51v172C76 384 0 517 0 517v173h116V0z" />
            </svg>
       
        )
    }
    
}

export default Curve;