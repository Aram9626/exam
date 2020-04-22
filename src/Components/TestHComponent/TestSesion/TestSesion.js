import React,{Component} from 'react';
import "./TestSesion.css";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class TestSesion extends Component {
    render() {
        // console.log(this.props.categories);
        return(
            <div className="Sesionrow">
                <div className="col-md-10 col-md-offset-1" style={{marginLeft:'6%'}}>
                    <h5 className="test-sub">​Create Study Session</h5>
                    <div className="t-card">
                        <div className="title-mb bg-green" style={{marginTop:'-20px'}}>
                            <h5 className="m-0">Session Size</h5>
                        </div>
                        <div className="t-card-row">
                            <p>Enter the number of questions you want for your session.</p>
                            <p>You may enter anything from one question up to the maximum number of questions.</p>
                        </div>
                        <div className="t-card-row">
                            <h5 className="title-sm">Number of questions</h5>
                            <div className="input-group d-flex a-i-center">
                                <input className="input" type="number" min="1" max="100" placeholder="1"/>
                                    <span className="input-label text-muted">min: 1, <br/> max: 100 out of 123 matching criteria</span>
                            </div>
                            <div className="deselect-btns">
                                <Link to="" className="btn text-green">Use maximum</Link>
                            </div>
                        </div>
                        <div className="t-card-row">
                            <p>Gleim recommends sessions of 20 questions as the optimal size. Sessions are limited to
                                100 questions each.</p>
                        </div>
                    </div>
                    <div className="t-card_footer bg-white">
                        <div className="t-card_footer-col">
                            <Link to="" onClick={(e)=>{e.preventDefault();this.props.history.push('/test-1')}} className="btn btn-sm btn-cancel">Cancel</Link>
                        </div>
                        <div className="t-card_footer-col text-right">
                            <Link to="" onClick={(e)=>{e.preventDefault();this.props.history.push('/test-1/test-order')}} className="btn btn-sm btn-gray">Previews</Link>
                            <Link to="/test-1/testh" className="btn btn-sm btn-green">Finish</Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        categories:state.reducer.categories,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        // onGetCategory:(value)=>{dispatch({type: "GETCATEGORY",value})},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestSesion)