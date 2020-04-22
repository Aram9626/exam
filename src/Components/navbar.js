import React,{Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import { withRouter } from "react-router";


 class Navbar extends Component{
     render() {
         const path=this.props.location.pathname;
        return(
            <div>
            {path==='/'||path==='/signup'?
            <div className='navbar' style={{background:!this.props.rol ? "white" : "transparent"}} >
                <NavLink to='/' >
                    <img className='img' src={!this.props.rol ? window.location.origin+"/logo_dark.svg" : window.location.origin+"/logo_light.svg"} />
                </NavLink>

                <nav className='nav' >
                    <NavLink style={{color:!this.props.rol ? "black" : "white"}} className='navlink signup' to='/signup' exact>Sign Up</NavLink>
                        <NavLink style={{color:!this.props.rol ? "black" : "white",margin:'8px'}} onClick={(e)=>{e.preventDefault();this.props.onShowModalLogIn()}} className='navlink' to='/login' exact>Log In <span className='caret'></span> </NavLink>
                </nav>
            </div>
                    :
                <div className='navbar' style={{background:"white",position:'absolute'}} >
                    <NavLink to='/test-1' >
                        <img className='img' src={!this.props.rol ? window.location.origin+"/logo_dark.svg" : window.location.origin+"/logo_light.svg"} />
                    </NavLink>
                    <NavLink to='/test-1' className="user-img"  onClick={(e)=>{e.preventDefault();this.props.onShowModalLogOut()}} >
                        <img src={window.location.origin+"/user-1.jpg"} alt=""/>
                    </NavLink>
                </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        rol:state.reducer.rol,
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Navbar))