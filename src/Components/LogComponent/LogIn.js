import React,{Component} from 'react';
import './LgIn.css';
import { withRouter } from "react-router";
import {connect} from "react-redux";
import axios from 'axios'

 class LogIn extends Component {
    componentDidMount() {
        this.props.onClear(false)
    }

     changePayload=(e)=>{
        const payload={...this.props.loginPayload};
        payload[e.target.name]=e.target.value;
        this.props.onLOGINPAYLOAD(payload)
    };
    emptyLoginPayload=()=>{
        const load={...this.props.loginPayload};
        load.email='';
        load.password='';
        this.props.onLOGINPAYLOAD(load);
    };
    submitForm (e) {
        e.preventDefault();
        const body =this.props.loginPayload;
        axios.post('http://localhost:8000/api/user/log-in',body)
            .then((res)=>{
                // console.log(res)
                if(res.data.statusCode===200){
                    this.props.history.push('/test-1');
                    this.props.onShowModalLogIn();
                    this.emptyLoginPayload();
                     localStorage.setItem('user', JSON.stringify(res.data.data))
                }else{
                    console.log(res)
                    const load={...this.props.loginPayload};
                    load.email='';
                    load.password='';
                    this.emptyLoginPayload()
                    this.props.onClear(true)
                }

        });
    }
    render() {
        return(
            <div className='login'>
                <ul className="dropdown">
                    <form onSubmit={(e)=>this.submitForm(e)}>
                        <div className="form-group">
                            <input
                                value={this.props.loginPayload.email}
                                className="form-control"
                                type="email" name="email"
                                placeholder="Email"
                                   required=""
                                   onChange={e=>this.changePayload(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.props.loginPayload.password}
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                   required=""
                                   onChange={e=>this.changePayload(e)}
                            />
                        </div>
                        <div className="form-group mb-50">
                            <label className="control control-checkbox text-muted">
                                <input type="checkbox" required=""/>
                                    {/*<div className="control_indicator"></div>*/}
                                    <span> Remember Me</span>
                            </label>
        <div className="clearl">{this.props.clear?'Your email or password is wrong. Please try again':null} </div>
                        </div>
                        <div className="form-group mb-0">
                            <input className="btn btn-default br-0" type="submit" value="Log In" style={{width: "100%"}}
                            />
                        </div>
                    </form>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        loginPayload:state.payload.loginPayload,
        clear:state.payload.clear
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onShowModalLogIn:(value)=>{dispatch({type: "MODALLOGIN",value})},
        onLOGINPAYLOAD:(value)=>{dispatch({type: "LOGINPAYLOAD",value})},
        onClear:(value)=>{dispatch({type: "CLEAR",value})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LogIn))