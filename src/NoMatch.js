import React, {Component} from 'react';
import { withRouter } from "react-router";

 class NoMatch extends Component{
     componentDidMount(){
        this.props.history.goBack()
     }
    render(){
        return (
          <div></div>
        );
} 
}
export default withRouter(NoMatch)