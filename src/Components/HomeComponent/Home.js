import React,{Component} from 'react';
import './Home.css'
import Main from "./Main";
import {connect} from "react-redux";


 class Home extends Component{
    componentDidMount() {
        this.props.onScrollToNavbar(true);
        document.addEventListener("scroll", this.hendleScroll);
    }
    componentWillUnmount() {
        this.props.onScrollToNavbar(false);
        document.removeEventListener("scroll", this.hendleScroll);
    }
    hendleScroll=()=>{
        if (window.scrollY < 80) {
            this.props.onScrollToNavbar(true);
        } else {
            this.props.onScrollToNavbar(false);
        }
    };

     render() {
        return(
            <div className='home'>
                <Main />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{

        rol:state.reducer.rol,

    }
}
function mapDispatchToProps(dispatch) {

    return{
        onScrollToNavbar:(mem)=>{dispatch({type: "SCROLL",mem})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)