import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";

 class Footer extends Component {
    render() {
        const path=this.props.location.pathname;
        return(
            <div className="footer">
                <div className="row">
                    <div className="col-sm-6">
                        <ul className="unlisted">
                            {path==='/'|| path==='/signup'?<li><NavLink to="/">Home</NavLink></li>:null}
                            <li><NavLink to="/">Contact Us</NavLink></li>
                            <li><NavLink to="/">Terms of Use</NavLink></li>
                            <li><NavLink to="/">Privacy</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <p className="copyright">Copyright © { new Date().getFullYear() } EXAM | All rights reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Footer);