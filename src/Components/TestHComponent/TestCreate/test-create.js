import React,{Component, Fragment} from 'react';
import "./testCreate.css";
import {Link} from 'react-router-dom';
import {createRequest} from '../../../server';
import CategorieList from './categorieList';
import {connect} from "react-redux";
const request = createRequest('/category');
const requestReport=createRequest('/report');

 class TestCreate extends Component {
    state={
        showPerform:true,
        performance:0,
        // categories:[],
        selAllBox:false,
        eachBox:false,
    };

     onShowPerform=()=>{
        this.setState({showPerform:!this.state.showPerform})
    };
     // componentWillUnmount() {
     //
     // }

     async componentDidMount(){
         await this.getReport();
        await this.getRootCategories();
        await localStorage.setItem('checkRadio','radio1');
    }
    getRootCategories= async ()=> {
        const res = await this.getCategories({
            only_root_categories: true,
            order: ['order', 'ASC'],
            with_subcategories: true,
            with_questions: {
                with_image: true
            }
        });
        // this.setState({categories:res.data.rows});
        this.props.onGetCategory(res.data.rows)
    };
     getCategories= async(findOptions)=> {
        findOptions = {...findOptions, credentials: 'include'};
          return  await request({
            method: 'GET',
            url: '',
            params: findOptions
        });
    };
    getReport=async()=>{
        const res = await this.getReportAction();
        // console.log(res)
    };
    getReportAction=async ()=>{
        return(await requestReport({
            method: 'GET',
            url:'/'
        }))
    };
    onHandleChange=(val)=>{
        const categories= [...this.props.categories];
        const newcategories=categories.map((item,index)=>{
            if(item.title===val){
               return {...item,box:!item.box};
            }
            else{
                return {...item}
            }
        });
        // console.log(newcategories);
        this.props.onGetCategory(newcategories)
    };
     onClickDesel= ()=>{
        const categories= [...this.props.categories];
       const allcategorie=categories.map((categorie)=>{
            return  {...categorie,box:false}
        });
        this.props.onGetCategory(allcategorie);
    };
     onClickSel= ()=>{
         const categories= [...this.props.categories];
         const allcategorie=categories.map((categorie)=>{
             return {...categorie,box:true}
         });
         this.props.onGetCategory(allcategorie);
     };

     componentDidUpdate(prevProps, prevState, snapshot) {
         if(prevProps.categories !== this.props.categories){
             const eachcategorie=this.props.categories;
                 this.setState({selAllBox:false});
             eachcategorie.map((item,index)=>{
                 if(!!item.box){
                     this.setState({selAllBox:true});
                 }
             });
         }
     }

     onChangeRadio=(e)=>{
         this.props.onCheckRadio(e.target.value);
         localStorage.setItem('checkRadio',e.target.value)
     };
     render() {
        return(
            <div className=' testcreate'>
                <div className="createrow">
                    <div className="col-md-10 col-md-offset-1" style={{marginLeft:'4.33333333%'}}>
                        <h5 className="test-sub">​Create Study Session</h5>
                        <div className="t-card">
                            <h5 className="m-0">I want to create my session using:</h5>
                            <div className="radio-box" style={{margin: '24px 0'}}>
                                <label className="control control-radio">
                                    The Gleim suggested approach
                                    <input type="radio" name="radio" value='radio1'
                                           checked={this.props.checkRadio==='radio1'}
                                           onChange={(e)=>this.onChangeRadio(e)}
                                    />
                                </label>
                                <label className="control control-radio">
                                    Customized exam options (choose unique questions, source, and more)
                                    <input type="radio" name="radio" value='radio2'
                                           checked={this.props.checkRadio==='radio2'}
                                           onChange={(e)=>this.onChangeRadio(e)}
                                    />
                                </label>
                            </div>
                            <div className="title-mb bg-green titlemb">
                                <h5 className="m-0">Select Study Unit</h5>
                            </div>
                            <div className="t-card-row">
                                <p>Select topics you wish to study by clicking on them in the list below.</p>
                                <p>Click on the <img src={window.location.origin+"/icons/nexticon.svg"}/> icon next to a Study Unit to expand a list of Subunits for that
                                    Study Unit and select them individually.</p>
                                {this.state.eachBox?<p>Please choose at least one topic.</p>:null}
                            </div>
                            <div className="desselect" style={{marginTop:'26px'}}>
                                <div className="deselect-btns">
                                    {this.state.selAllBox?
                                        <span className="btn text-dark"
                                              onClick={this.onClickDesel}>
                                    Deselect All
                                    </span>
                                    :<span className="btn text-dark"
                                           onClick={this.onClickSel}>
                                    Select All
                                    </span>}
                                    <span className="btn text-green"
                                    onClick={this.onShowPerform}>
                                        {this.state.showPerform?'Hide Performance '+this.state.performance +'%'
                                    :'View Performance'}
                                    </span>
                                </div>
                                <ul className="desselect-list unlisted">
                                    {this.props.categories.map((categorie,index)=>{
                                        return(
                                        <Fragment key={'categories'+index}>
                                        <CategorieList categorie={categorie}
                                                       index={index}
                                                       handleChange={this.onHandleChange} />
                                         </Fragment>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="t-card_footer bg-white">
                            <div className="t-card_footer-col">
                                <Link to="" onClick={(e)=>{e.preventDefault();this.props.history.push('/test-1')}} className="btn btn-sm btn-cancel">Cancel</Link>
                            </div>
                            <div className="t-card_footer-col text-right">
                                {this.state.selAllBox?<Link to="/test-1/test-order" className="btn btn-sm btn-green">Next</Link>:
                                    <Link to="" onClick={(e)=>{e.preventDefault();this.setState({eachBox:true})}} className="btn btn-sm btn-green">Next</Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        categories:state.reducer.categories,
        checkRadio:state.reducer.checkRadio
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onGetCategory:(value)=>{dispatch({type: "GETCATEGORY",value})},
        onCheckRadio:(value)=>{dispatch({type: "CHECKRADIO",value})},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestCreate)