import React,{Component} from 'react';


export default class Com2 extends Component{
    render() {
        return(
            <div className='component2'>
                    <div className="section-header text-center">
                        <h2 className="section-title">Personalized Customer Support</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-4" style={{left:"80px"}}>
                            <div className="ft-card">
                                <div className="ft-icon">
                                    <img src={window.location.origin+"/icons/planning.svg"} alt=""/>
                                </div>
                                <h4>Study Planner</h4>
                                <p>This tool lets you schedule your exam<br/> preparation based on your goals. </p>
                            </div>
                        </div>

                        <div className="col-sm-4" style={{left:"465px"}}>
                            <div className="ft-card">
                                <div className="ft-icon">
                                    <img src={window.location.origin+"/icons/team.svg"} alt=""/>
                                </div>
                                <h4>Expert Advise</h4>
                                <p>Our system allows you to interact<br/> with coaches on specific question. </p>
                            </div>
                        </div>

                        <div className="col-sm-4" style={{right:"100px"}}>
                            <div className="ft-card">
                                <div className="ft-icon">
                                    <img src={window.location.origin+"/icons/lock.svg"} alt=""/>
                                </div>
                                <h4>Access Until You Pass</h4>
                                <p>Use for free, until you pass</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}