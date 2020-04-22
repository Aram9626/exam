import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import List from "./list";
import {createRequest} from "../../../server";
const request = createRequest('/category');


export default class CategorieList extends Component{
    state={
        categorieshow:false,
        subcategorieshow:false,
        subcategories:[],
        subcategorielist:[]
    };
   async componentDidMount(){
      await  this.getSubcategories(this.props.categorie);
     await this.state.subcategories.map((sub,index)=>{
         if(sub.order===1){
          this.getSubcategorieList(sub)
         }
      })
    }
    getSubcategorieList= async (category) =>{
        const res = await this.getSubcategoriesAction({
            id: category.id,
            options: {
                with_subcategories: true,
                with_questions: {
                    with_image: true
                },
                order: ['order', 'ASC']
            }
        });
        this.setState({subcategorielist:res.data.rows})
        // console.log(res)
    };
    getSubcategories= async (category) =>{
        const res = await this.getSubcategoriesAction({
            id: category.id,
            options: {
                with_subcategories: true,
                with_questions: {
                    with_image: true
                },
                order: ['order', 'ASC']
            }
        });
        this.setState({subcategories:res.data.rows})
        // console.log(res)
    };
    getSubcategoriesAction = async  ( {id, options}) => {
        return (await request({
            method: 'GET',
            url: `/${id}/get-subcategories`,
            params: options
        }));
    };

    categorieListShow=(e)=>{
        e.preventDefault();
        this.setState({categorieshow:!this.state.categorieshow})
    };
    subcategorieListShow=(e)=>{
        e.preventDefault();
        this.setState({subcategorieshow:!this.state.subcategorieshow})
    };

    render(){
            return(
            <li>
                <List  index={this.props.index}
                       categorie={this.props.categorie}
                       onListShoe={this.categorieListShow}
                       handleChange={this.props.handleChange}/>
                {this.state.subcategories.length && this.state.categorieshow ?
                    this.state.subcategories.map ( ( subcategorie,index) => {
                        if(subcategorie.order===1){
                            console.log(subcategorie);

                    return (
                        <div key={'subcategorie'+index} style={{marginLeft:'30px'}}>
                            <List categorie={subcategorie} index={index} onListShoe={this.subcategorieListShow} handleChange={this.props.handleChange} />
                            {this.state.subcategorielist.length && this.state.subcategorieshow ?
                                this.state.subcategorielist.map ( ( sublist,index) => {
                                    return (
                                        <div key={'subcategorielist'+index} style={{marginLeft:'30px'}}>
                                            <List categorie={sublist}
                                                  index={index}
                                                  handleChange={this.props.handleChange} />
                                        </div>
                                    )
                                })
                                :null }
                        </div>
                    )}
                })
                 :null }

            </li>
            )
        }
    }