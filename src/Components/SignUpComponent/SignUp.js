import React, {Component} from 'react';
import './SignUp.css';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";

 class SignUp extends Component{

    componentDidMount() {
        this.props.onClear(false)
    }

     changePayload=(e)=>{
        const payload={...this.props.signupPayload};
        payload[e.target.name]=e.target.value;
        this.props.onSignupPayload(payload)
    };
    submitForm (e) {
        e.preventDefault();
        if(this.props.confirmP===this.props.signupPayload.password){
            const body=this.props.signupPayload;
            axios.post('http://localhost:8000/api/user/sign-up',body)
                .then((res)=>{
                    console.log(res.data);
                    if(res.data.statusCode === 200){
                        this.props.history.push('/test-1');
                        localStorage.setItem('user', JSON.stringify(res.data.data))
                    }
                })
        }else{
            const payload={...this.props.signupPayload};
            payload.first_name='';
            payload.last_name='';
            payload.email='';
            payload.password='';
            payload.username='';
            payload.role=this.props.signupPayload.role;
            this.props.onClear(true);
            this.props.onSignupPayload(payload)
        }
    }
    render() {
        return(
            <div className='signUpComponent'>
                <div className="sign">
                 <div className="sign-logo">
                     <img src="./logo_black.svg" alt=""/>
                 </div>
                 <div className="sign-card">
                     <div className="section-header text-center">
                         <br/>
                     <h1 className="section-title text-green">Sign Up</h1>
                 </div>
                 <form onSubmit={(e)=>this.submitForm(e)} >
                 <div className="form-group">
                 <input
                     className="form-control rounded"
                     type="text"
                     name="username"
                     placeholder="Username"
                     value={this.props.signupPayload.username}
                     onChange={e=>this.changePayload(e)}
                 />
                </div>
                <div className="form-group">
                <input
                    className="form-control rounded"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.props.signupPayload.email}
                    onChange={e=>this.changePayload(e)}
                />
                </div>
                <div className="form-group">
                <input
                    className="form-control rounded"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.props.signupPayload.password}
                    onChange={e=>this.changePayload(e)}
                />
                </div>
                <div className="form-group">
                <input style={{border:this.props.clear?"1px solid #ff0202" :null}}
                    className="form-control rounded"
                    type="password"
                    name="Cpassword"
                    placeholder="Confirm Password"
                    value={this.props.confirmP}
                    onChange={e=>this.props.onConfirmPass(e.target.value)}
                />
                </div>

                <div className="form-group mb-50">
                <label className="control control-checkbox text-muted">
                <input type="checkbox" required=""/>
                {/*<div className="control_indicator"></div>*/}
                I agree all statements in <NavLink to="/signup" exact>Terms of Use.</NavLink>
                </label>
                <div className="clear">{this.props.clear?<p>password is wrong</p>:null}</div>
                </div>

                <div className="form-group mb-0">
                <input className="btn btn-default" type="submit" value="Register" style={{width: "100%"}}/>
                </div>
                </form>
                </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        signupPayload:state.payload.signupPayload,
        clear:state.payload.clear,
        confirmP:state.payload.confirmP
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onSignupPayload:(value)=>{dispatch({type: "SIGNUPPAYLOAD",value})},
        onConfirmPass:(value)=>{dispatch({type: "CONFIRMPASS",value})},
        onClear:(value)=>{dispatch({type: "CLEAR",value})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
