import React,{Component} from 'react';
import "./TestReport.css";
import {Link} from 'react-router-dom';
import axios from 'axios'

export default class TestReport extends Component {
    state={
        rows:[]
    };
    componentDidMount(){
        axios.get('http://localhost:8000/api/report/')
        .then(res=>{
            this.setState({rows:res.data.data.rows})
        })
    }
    render() {
        return(
            <div className="Reportrow">
                <div className="col-md-10 col-md-offset-1" style={{marginLeft:"6%"}}>
                    {!this.state.rows.length?
                        <div className="t-card_footer j-c-center bg-white" style={{justifyContent: 'center',padding: '20px 20px 40px'}}>
                            <div className="t-card_footer-col text-center">
                                <h4 className="title-sm text-center m-0" style={{padding: "10px 0",fontWeight: '700'}}>There are no reports</h4>
                                <input className="btn btn-sm btn-gray" type="button" value="Return to the Test Prep Home Screen"
                                onClick={()=>this.props.history.push('/test-1')}/>
                            </div>
                        </div>:
                        <div>
                    <h5 className="test-sub">​Create Study Session</h5>
                    <div className="t-card">
                        <div className="title-mb bg-green" style={{marginTop:'-20px'}}>
                            <h5 className="m-0" style={{fontSize:"18px"}}>Last Session Grade Report - 0%</h5>
                        </div>
                        <div className="row-flex">
                            <div className="flex-col">
                                <p className="m-0"><b>Name:</b> Gohar M</p>
                                <p className="m-0"><b>Date/Time:</b> 5/25/2019 5:22 PM - 5/26/2019 2:46 PM</p>
                                <p className="m-0"><b>Test Type:</b> Study Session</p>
                            </div>
                        </div>
                        <b className="border-large"></b>
                        <h5 className="title-sm text-green m-0" style={{padding:'10px 0'}}>View Review Session</h5>
                        <b className="border-large"></b>
                        <div className="row-flex">
                            <div className="flex-col">
                                <p className="m-0">Number of questions <b>missed or marked</b></p>
                                <Link to="">Create a new study session from these same questions</Link>
                            </div>
                            <div className="flex-col">
                                <b className="d-b">1</b>
                            </div>
                        </div>

                        <div className="row-flex">
                            <div className="flex-col">
                                <p className="m-0"><b>Total</b> number of questions in this session</p>
                                <Link to="">Create a new study session from these same questions 20</Link>
                            </div>
                            <div className="flex-col">
                                <b className="d-b">20</b>
                            </div>
                        </div>

                        <div className="row-flex">
                            <div className="flex-col">
                                <p className="m-0">Number of questions <b>answered correctly</b></p>
                            </div>
                            <div className="flex-col">
                                <b className="d-b">0</b>
                            </div>
                        </div>
                        <b className="border-large"></b>
                        <div className="row-flex">
                            <p className="m-0"><b>Your study score is determined by the number of questions answered
                                correctly on your first attempt.</b></p>
                        </div>

                        <div className="row-flex">
                            <div className="flex-col d-flex fl-d-column j-c-between a-i-start">
                                <p className="m-0">Score based on total questions: </p>
                                <p className="m-0">0% Score based on total answered questions: </p>
                            </div>
                            <div className="flex-col d-flex fl-d-column j-c-between a-i-start">
                                <b className="d-b text-light">0%</b>
                                <b className="d-b text-light">0%</b>
                            </div>
                        </div>

                        <div className="row-flex">
                            <div className="flex-col d-flex fl-d-column j-c-between a-i-start">
                                <p className="m-0">1:16:22 Entire time spent in session </p>
                                <p className="m-0">1:16:22 Average time spent per question: </p>
                            </div>
                            <div className="flex-col d-flex fl-d-column j-c-between a-i-start">
                                <b className="d-b text-light">1:16:22</b>
                                <b className="d-b text-light">1:16:22</b>
                            </div>
                        </div>
                        <div className="row-flex">
                            <p className="m-0">This information has been updated in all areas of your Performance
                                Analysis.</p>
                        </div>
                    </div>


                    <div className="t-card_footer j-c-center bg-white" style={{justifyContent:'center'}}>
                        <div className="t-card_footer-col text-center">
                            <Link to="/test-1" className="btn btn-sm btn-gray">Return To The Test Prem Home Screen</Link>
                        </div>
                    </div></div>}
                </div>
            </div>
        )
    }
}