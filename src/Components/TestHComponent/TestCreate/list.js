import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class List extends Component{

    render(){
        return(
                <div className="list-item" >
                    {this.props.categorie.subcategories.length?
                        <Link to="" className="list-btn" onClick={(e)=>this.props.onListShoe(e)} >
                            <img src={window.location.origin+"/icons/nexticon.svg"} />
                        </Link>
                        :null}
                    <label className="control control-checkbox">
                        <input type="checkbox"
                               checked={this.props.categorie.box===true}
                               onChange={()=>this.props.handleChange(this.props.categorie.title)} />
                        {`${this.props.index+1}: (1) ${this.props.categorie.title}`}
                    </label>
                </div>
        )
    }
}
