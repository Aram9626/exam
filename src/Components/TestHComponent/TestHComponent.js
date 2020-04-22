import React,{Component} from 'react';
import "./Test.css"
import Test1 from "./test-1";
import {Switch, Route} from "react-router-dom";
import TestStart from "./TestStart/TestStart";
import TestCreate from "./TestCreate/test-create";
import TestSesion from "./TestSesion/TestSesion";
import TestOrder from "./TestOrder/TestOrder";
import TestReport from "./TestReport/TestReport";
import NoMatch from '../../NoMatch';
import {connect} from "react-redux";
import QPool from "./TestOrder/QuestionPool";

class Test extends Component {

    render() {
        const path=this.props.location.pathname;
        return(
            <div className="test" style={{backgroundImage: "url(" + window.location.origin+"/test_divide.png" + ")",height:(path !=='/test-1/test-report')?'1000px':'1150px'}} >
                <div className="container" >
                    <div className="test-title">
                        <h3 className="m-0"><span className="text-green">Part 1</span> | Test Prep</h3>
                    </div>
                    <Switch>
                        <Route path='/test-1/testh' exact  component={Test1}/>
                        <Route path='/test-1/test-order' exact component={localStorage.getItem('checkRadio')==='radio1'?TestOrder:QPool}/>
                        <Route path='/test-1/test-sesion' exact component={TestSesion}/>
                        <Route path='/test-1/test-create' exact component={TestCreate}/>
                        <Route path='/test-1/test-report' exact component={TestReport}/>
                        <Route path='/test-1' exact component={TestStart}/>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
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

export default connect(mapStateToProps,mapDispatchToProps)(Test)