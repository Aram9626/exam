import React,{Component,Fragment} from 'react';
import "./TestOrder.css";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class QPool extends Component {
    state={
        questionPoolFilter: [
            {
                title: 'Unanswered',
            },
            {
                title: 'Incorrect',
            },
            {
                title: 'Marked',
            },
            {
                title: 'All',
            },
        ],
        notCheck:false
    };
    render() {
        return(
            <div className="Orderrow">
                <div className="col-md-10 col-md-offset-1" style={{marginLeft:'6%'}}>
                    <h5 className="test-sub" style={{fontWeight:'700'}}>​Create Study Session</h5>
                    <div className="t-card">
                        <h5 className="m-0 pool">Question Pool</h5>
                        <div style={{margin:'24px 0'}}>
                        {this.state.questionPoolFilter.map((item,index)=>{
                            return(
                                <label className="control control-radio" key={'questionPoolFilter'+index} style={{fontSize:'20px'}}>
                                    <input type="radio" name="question_pool"/>
                                    {item.title}
                                </label>
                            )
                        })}
                        </div>
                        {this.state.notCheck?
                            <span>There are no available questions using these criteria. Please go back and change your selections.</span>
                        :null}
                    </div>
                    <div className="t-card_footer bg-white">
                        <div className="t-card_footer-col">
                            <Link to="" onClick={(e)=>{e.preventDefault();this.props.history.push('/test-1')}} className="btn btn-sm btn-cancel">Cancel</Link>
                        </div>
                        <div className="t-card_footer-col text-right">
                            <Link to="" onClick={(e)=>{e.preventDefault();this.props.history.push('/test-1/test-create')}} className="btn btn-sm btn-gray">Previews</Link>
                            <Link to="" onClick={(e)=>{e.preventDefault();this.setState({notCheck:true})}} className="btn btn-sm btn-green">Next</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        checkRadio:state.reducer.checkRadio
    }
}
function mapDispatchToProps(dispatch) {
    return{
        // onSelAll:(value)=>{dispatch({type: "SELSECTALL",value})},
        // onGetCategory:(value)=>{dispatch({type: "GETCATEGORY",value})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(QPool)