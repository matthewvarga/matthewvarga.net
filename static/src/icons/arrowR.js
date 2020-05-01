import React, {Component} from 'react';
import './styles';

class IconArrowR extends Component {
    render() {
        return (
            <svg 
                className={"icon " + (this.props.className ? this.props.className : "")}
                onClick={(e) => {this.props.onClick ? this.props.onClick(e) : null}} 
                version="1.1" viewBox="0 0 512 512" x="0px" y="0px" >
                <path d="M494.469,213.589L319.176,37.864c-7.802-7.821-20.465-7.835-28.286-0.035c-7.82,7.801-7.836,20.465-0.035,28.285
                    l175.311,175.744c7.797,7.798,7.797,20.487-0.018,28.302L290.855,445.886c-7.8,7.82-7.785,20.484,0.035,28.285
                    c3.904,3.894,9.016,5.84,14.126,5.84c5.126,0,10.253-1.959,14.161-5.876l175.275-175.707
                    C517.846,275.033,517.846,236.966,494.469,213.589z"/>
                <path d="M383.019,235.999H20.001C8.954,235.999,0,244.954,0,256s8.954,20.001,20.001,20.001h363.018
                    c11.047,0,20.001-8.954,20.001-20.001S394.066,235.999,383.019,235.999z"/>
            </svg>
       
        )
    }
    
}

export default IconArrowR;