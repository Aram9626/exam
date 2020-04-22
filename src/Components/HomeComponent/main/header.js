import React,{Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Header extends Component{
    render() {
        return(
            <div className='mainheader'>
                <div className="title">
                    <h1>PASS WITH THE #1</h1>
                    <h1> GRE EXAM PREP COURSE</h1>
                    <p style={{fontSize:"23px"}}>Use for free and get unlimited access to one exam topics</p>
                    <NavLink to="/" className="btn btn-default">Start Now</NavLink>
                </div>
                <img className='imgh' src={window.location.origin+"/header-bg.jpg"}/>
                <img className='imgf' src={window.location.origin+"/white_divide.png"} />
            </div>
        )
    }
}