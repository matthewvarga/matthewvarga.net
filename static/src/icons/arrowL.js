import React, {Component} from 'react';
import './styles';

class IconArrowL extends Component {
    render() {
        return (
            <svg 
                className={"icon " + (this.props.className ? this.props.className : "")}
                onClick={(e) => {this.props.onClick ? this.props.onClick(e) : null}} 
                version="1.1" viewBox="0 0 512 512" x="0px" y="0px" >
                <path d="M45.833,270.143c-7.797-7.798-7.797-20.487,0.018-28.302L221.145,66.114c7.8-7.82,7.785-20.484-0.035-28.285
                    c-7.821-7.8-20.485-7.785-28.286,0.035L17.549,213.572c-23.395,23.395-23.395,61.462-0.018,84.839l175.293,175.725
                    c3.908,3.917,9.033,5.875,14.161,5.875c5.11,0,10.222-1.947,14.125-5.841c7.82-7.801,7.836-20.465,0.035-28.285L45.833,270.143z"
                    />
                <path d="M491.999,235.999H128.98c-11.047,0-20.001,8.954-20.001,20.001s8.954,20.001,20.001,20.001h363.018
                    c11.047,0,20.001-8.954,20.001-20.001S503.045,235.999,491.999,235.999z"/>
            </svg>
       
        )
    }
    
}

export default IconArrowL;