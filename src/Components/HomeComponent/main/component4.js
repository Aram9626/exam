import React,{Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Com4 extends Component{
    render() {
        return(
            <div className="component4">
                <div className='center'>
                <div className="section-header text-center">
                    <h1 style={{fontSize:"45px"}}  className="section-title"><b>Pass With The Most Widely Used <br/><span className="text-green">GRE Review Course</span>
                    </b></h1>
                    <p style={{fontSize:"22px"}} className="section-sub">Get unlimited access now!</p>
                </div>
                <NavLink to="/" className="btn btn-default">Try Now Free</NavLink></div>
            </div>
        )
    }
}