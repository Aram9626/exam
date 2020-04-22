import React,{Component} from 'react';
import "./TestOrder.css";
import {Link} from 'react-router-dom';

export default class TestOrder extends Component {
     state={
         question:'question1',
         answer:'answer1'
     };
     onChangeRadio=(e,state)=>{
         this.setState({[state]:e.target.value})
     };
    render() {
        return(
            <div className="Orderrow">
                <div className="col-md-10 col-md-offset-1" style={{marginLeft:'6%'}}>
                    <h5 className="test-sub" style={{fontWeight:'700'}}>​Create Study Session</h5>
                    <div className="t-card">
                        <div className="title-mb bg-green" style={{marginTop:'-20px'}}>
                            <h5 className="m-0">Session Order</h5>
                        </div>
                        <h5 className="m-0">In what order should these questions appear?</h5>
                        <div className="radio-box">
                            <label className="control control-radio">
                                In the standard Gleim order
                                <input type="radio" name="radio" value='question1'
                                       checked={this.state.question==='question1'}
                                       onChange={(e)=>this.onChangeRadio(e,'question')}/>
                            </label>
                            <label className="control control-radio">
                                In random order
                                <input type="radio" name="radio" value='question2'
                                       checked={this.state.question==='question2'}
                                       onChange={(e)=>this.onChangeRadio(e,'question')}
                                />
                            </label>
                        </div>
                        <h5 className="m-0">In what order should the answer choices appear?</h5>
                        <div className="radio-box">
                            <label className="control control-radio">
                                In the standard Gleim order
                                <input type="radio" name="radio1" value='answer1'
                                       checked={this.state.answer==='answer1'}
                                       onChange={(e)=>this.onChangeRadio(e,'answer')}/>
                            </label>
                            <label className="control control-radio">
                                In random order
                                <input type="radio" name="radio1" value='answer2'
                                       checked={this.state.answer==='answer2'}
                                       onChange={(e)=>this.onChangeRadio(e,'answer')}/>
                            </label>
                        </div>
                    </div>
                    <div className="t-card_footer bg-white">
                        <div className="t-card_footer-col">
                            <Link to="" onClick={(e)=>{e.preventDefault();this.props.history.push('/test-1')}} className="btn btn-sm btn-cancel">Cancel</Link>
                        </div>
                        <div className="t-card_footer-col text-right">
                            <Link to="" onClick={(e)=>{e.preventDefault();this.props.history.push('/test-1/test-create')}} className="btn btn-sm btn-gray">Previews</Link>
                            <Link to="/test-1/test-sesion" className="btn btn-sm btn-green">Next</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
