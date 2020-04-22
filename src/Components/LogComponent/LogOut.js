import React,{Component} from 'react';
import './LgIn.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";

 class LogOut extends Component {
    onLogOut=()=>{
        axios.get('http://localhost:8000/api/user/log-out')
            .then(res=>{
                this.props.onShowModalLogOut();
                localStorage.removeItem('user');
                localStorage.removeItem('prevroute');
            })

    };
    render() {
        return(
            <div className='logout'>
                            <ul className="dropdown">
                                <li className="cursor">
                                     <NavLink to="/test"> <img src={window.location.origin+"/icons/user.svg"} style={{width: "16px"}} />   Profile</NavLink>
                                </li>
                                <li className="cursor" onClick={this.onLogOut}>
                                    <NavLink to="/"><img src={window.location.origin+"/icons/logout.svg"} style={{width: "16px"}}/>   Log Out</NavLink>
                                </li>
                            </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        loginPayload:state.payload.loginPayload
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onShowModalLogOut:(value)=>{dispatch({type: "MODALLOGOUT",value})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogOut)