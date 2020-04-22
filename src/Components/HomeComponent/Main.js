import React,{Component} from 'react';
import Header from "./main/header";
import Com1 from "./main/component1";
import Com2 from "./main/component2";
import Com3 from "./main/component3";
import Com4 from "./main/component4";

export default class Main extends Component {
    render() {
        return(
               <div className='main'>
                  <Header/>
                  <Com1/>
                  <Com2/>
                  <Com3/>
                  <Com4/>
               </div>
        )
    }
}