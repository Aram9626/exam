import React,{Component} from 'react';
import {NavLink} from "react-router-dom";


export default class Com3 extends Component{
    render() {
        return(
            <div className='component3'>
                <div className="section-header text-center">
                    <h2 className="section-title"><span className="text-green"><b>Gre Free</b></span> <b>Exam Resources</b></h2>
                </div>
                <div className="col-sm-4" style={{left: '10px'}}>
                    <div className="card">
                        <h4 className="text-green m-0">GRE Exam Blog</h4>
                        <p>Visit exam blog and get valuable exam study advice.</p>
                        <NavLink to="/" className="btn btn-link">read more</NavLink>
                    </div>
                </div>

                <div className="col-sm-4" style={{right: '450px'}}>
                    <div className="card">
                        <h4 className="text-green m-0">GRE Questions</h4>
                        <p>More than 2000 questions with explanations.</p>
                        <NavLink to="/" className="btn btn-link">read more</NavLink>
                    </div>
                </div>

                <div className="col-sm-4" style={{right: '10px'}}>
                    <div className="card">
                        <h4 className="text-green m-0">Webinars & Videos</h4>
                        <p>Check the dates for the webinars and ask your questions directly.</p>
                        <NavLink to="/" className="btn btn-link">read more</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}