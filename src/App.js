import React, {Component} from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom";
import { withRouter } from "react-router";
import Home from './Components/HomeComponent/Home';
import SignUp from "./Components/SignUpComponent/SignUp";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import LogIn from "./Components/LogComponent/LogIn";
import Test from "./Components/TestHComponent/TestHComponent";
import LogOut from "./Components/LogComponent/LogOut";
import NoMatch from './NoMatch';
import {connect} from "react-redux";

class App extends Component{
    componentDidMount() {
        localStorage.removeItem('user');
        localStorage.removeItem('prevroute')
    }

    onShowModalLogIn=()=>{
        this.props.onShowModalLogIn(true)
    };
    onShowModalLogOut=()=>{
        this.props.onShowModalLogOut(true)
    };
    render() {
        return (
            <div className="App">
                <Navbar/>
                {this.props.modalLogIn?<LogIn />:null}
                {this.props.modalLogOut?<LogOut  />:null}
                    <Switch>
                        <Route path='/test-1'  component={Test} />
                        <Route path='/signup' exact component={SignUp} />
                        <Route path='/' exact component={Home} />
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        modalLogIn:state.reducer.modalLogIn,
        modalLogOut:state.reducer.modalLogOut
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onShowModalLogIn:(value)=>{dispatch({type: "MODALLOGIN",value})},
        onShowModalLogOut:(value)=>{dispatch({type: "MODALLOGOUT",value})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App))

