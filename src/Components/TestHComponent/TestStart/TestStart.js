import React,{Component} from 'react';
import "./TestStart.css";
import {Link} from 'react-router-dom';


export default class TestStart extends Component {
    render() {
        return(
            <div className=' teststart'>
                <div className="col-md-10 col-md-offset-1" style={{marginLeft:'4.33333333%',height:'160px',maxWidth: '90%'}}>
                    <div className="t-card">
                        <h5 className="m-0">Getting Started:</h5>
                        <p className="mt-15 mb-0 text-muted">Start now by creating a Practice Exam that emulates the
                            exam environment.
                            <br/> You currently only have access to Study Unit 1. If you need more practice questions,
                                you should use the CIA Test Prep as a supplemental tool or as part of the Gleim Premium
                                CIA Review System.</p>
                    </div>

                    <div className="row">
                        <div className="col4" style={{left:"15px"}}>
                            <div className="card-lg text-left">
                                <div className="card-icon">
                                    <img src={window.location.origin+"/icons/exam_1.svg"} alt=""/>
                                </div>
                                <h4>Create a Practice Exam</h4>
                                <p className="text-muted">Practice Exams simulate a real exam environment.
                                    You will not know which questions you have
                                    answered correctly until the session is graded.</p>
                                <Link to='' className="btn btn-link-create">Create one now!</Link>
                            </div>
                        </div>

                        <div className="col4" style={{left:"420px"}}>
                            <div className="card-lg text-left">
                                <div className="card-icon">
                                    <img src={window.location.origin+"/icons/exam_2.svg"} alt=""/>
                                </div>
                                <h4>Create a Study Session</h4>
                                <p className="text-muted">Study Sessions give you immediate feedback as
                                    you answer questions.</p>
                                <Link to='/test-1/test-create' className="btn btn-link-create">Create one now!</Link>
                            </div>
                        </div>

                        <div className="col4" style={{right:"15px"}}>
                            <div className="card-lg text-left">
                                <div className="card-icon">
                                    <img src={window.location.origin+"/icons/exam_3.svg"} alt=""/>
                                </div>
                                <h4>Performance Analysis</h4>
                                <p className="text-muted">View grade reports, session statistics, and history
                                    information of all previous sessions. You may also
                                    create review sessions from History.</p>
                                <Link to="/test-1/test-report" className="btn btn-link-create">Create one now!</Link>
                            </div>
                        </div>

                        <div className="col-sm-12 text-center mt-50">
                            <Link to="" className="btn btn-default">Contact With Us</Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}