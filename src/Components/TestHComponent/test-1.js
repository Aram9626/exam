import React,{Component} from 'react';
import "./Test.css";
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {connect} from "react-redux";
import {createRequest} from "../../server";

const requestc = createRequest('/category');
const request = createRequest('/test-session');

class Test1 extends Component {
    state={
        categorieTitle:'',
        subcategorie:[],
        bool:false,
        mark:true,
        gradeModal:false,
        DiscardModal:false,
        HelpModal:false,
        pausePage:true,
        currentSessionTime: 0,
        averageTimeForQuestions: 0,
        sessionPaused:false,
        incrementInterval: null
    };
   async componentDidMount() {
        await this.props.categories.map((item,index)=>{
           if(item.box){
               localStorage.setItem('categorie',JSON.stringify(item))
           }
        });
         const categorie= JSON.parse(localStorage.getItem('categorie'));
         console.log(categorie)
         if(categorie.subcategories.length){
           await this.getSubcategorieList(categorie.subcategories[1]);
         }
       if(categorie.subcategories.length){
           console.log(this.state.subcategorie);
           let  title=`${categorie.order}: ${categorie.title} | ${categorie.subcategories[1].order}: ${categorie.subcategories[1].title} | ${this.state.subcategorie[0].order}: ${this.state.subcategorie[0].title}`;
           this.setState({categorieTitle:title})
       }else{
           let title=`${categorie.order}: ${categorie.title}`;
           this.setState({categorieTitle:title})
       }
       this.getTestSession();
        this.incrementTime();
    }
    getTestSession= async ()=>{
        const res = await this.getTestSessionAction({type: 'study-session'});
        console.log(res)
        // if(res.statusCode === 200){
        //
        // }
    };
    getTestSessionAction= async(payload)=> {
        const res = await request({
            method: 'GET',
            url: '',
            params: payload
        });

        // if (res.statusCode === 200) {
        //     // commit('setTestSession', {testSession: res.data, type: res.data.type});
        //     console.log(res)
        // }
        //
        // return res;
    };
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
        this.setState({subcategorie:res.data.rows});
    };
    getSubcategoriesAction = async  ( {id, options}) => {
        return (await requestc({
            method: 'GET',
            url: `/${id}/get-subcategories`,
            params: options
        }));
    };
    componentWillUnmount() {
        clearInterval(this.state.incrementInterval);
        // localStorage.removeItem('categorie')
    }

    onToggleClass=()=>{
        this.setState({bool:!this.state.bool})
    };
    onCalculate=(e)=>{
        e.preventDefault();
        window.open('https://www.desmos.com/scientific', 'Calculator', 'width=600, height=300');
    };
    onPause=(e)=>{
        e.preventDefault();
        clearInterval(this.state.incrementInterval);
        this.setState({pausePage:false})
    };
    onUnpause=()=>{
        this.setState({pausePage:true});
        this.incrementTime();
    };
    incrementTime=(secs)=>{
        // this.state.currentSessionTime = secs;
        if(!this.incrementInterval && !this.state.sessionPaused){
            var incrementInterval = setInterval(() => {
                let currentSessionTime=this.state.currentSessionTime+1;
                this.setState({currentSessionTime})
            },1000);
            this.setState({incrementInterval})
        }

    };
    hhmmss=(secs)=> {
        var minutes = Math.floor(secs / 60);
        secs = secs%60;
        var hours = Math.floor(minutes/60);
        minutes = minutes%60;
        return `${("0"+hours).slice(-2)}:${("0"+minutes).slice(-2)}:${("0"+secs).slice(-2)}`;
    };
    GradeClose = () => this.setState({gradeModal:false});
    GradeShow = () => this.setState({gradeModal:true});
    DiscardClose = () => this.setState({DiscardModal:false});
    DiscardShow = () => this.setState({DiscardModal:true});
    HelpClose = () => this.setState({HelpModal:false});
    HelpShow = () => this.setState({HelpModal:true});
    render() {
        return(
                    <div className="row">
                        {!this.state.pausePage?
                            <div className="col-md-10 col-md-offset-1">
                            <h5 className="testsub">​Quiz is Paused. Click Unpause to continue.</h5>
                                <br/>
                            <button onClick={this.onUnpause}>Unpause</button>
                            </div>:
                        <div className="col-md-10 col-md-offset-1">
                            <h5 className="test-sub">Create Study Session</h5>

                            <div className="t-wrap" style={{width:!this.state.bool?"100%" :"70%",height:!this.state.bool?null :"690px"}}>
                                <div className="w-body">
                                    <div className="w-body-header">
                                        <Link to="" className="w-h-btn" style={{left:'30px'}}
                                              onClick={(e)=>{e.preventDefault();this.GradeShow()}}>
                                            <img src={window.location.origin+"/icons/grade.svg"}/>
                                            <span className="text-muted">Grade</span>
                                        </Link>
                                        <Modal show={this.state.gradeModal} onHide={this.GradeClose} animation={true}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Grade Session
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Are you sure you want to Grade?</Modal.Body>
                                            <Modal.Body>You have unanswered questions.</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="success" style={{padding: '8px 20px',margin: '0 2px'}} onClick={this.GradeClose}>
                                                    Return To Questions
                                                </Button>
                                                <Button variant="secondary" style={{padding: '8px 20px',margin: '0 2px'}} onClick={this.GradeClose}>
                                                    Grade
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <Link to="" className="w-h-btn" style={{left:'150px'}}
                                              onClick={(e)=>{e.preventDefault();this.DiscardShow()}}>
                                            <img src={window.location.origin+"/icons/error.svg"}/>
                                            <span className="text-muted">Discard</span>
                                        </Link>
                                        <Modal show={this.state.DiscardModal} onHide={this.DiscardClose} animation={true}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Discard Session</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Are you sure you want to discard this quiz?</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="success" style={{padding: '8px 20px',margin: '0 2px'}} onClick={this.DiscardClose}>
                                                    Return To Questions
                                                </Button>
                                                <Button variant="secondary" style={{padding: '8px 20px',margin: '0 2px'}} onClick={this.DiscardClose}>
                                                    Discard
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <Link to="" className="w-h-btn" style={{left:'270px'}}
                                              onClick={(e)=>{this.onPause(e)}}>
                                            <img src={window.location.origin +"/icons/pause.svg"}/>
                                            <span className="text-muted">Pause</span>
                                        </Link>

                                        <Link to="" className="w-h-btn" style={{left:'390px'}} onClick={(e)=>this.onCalculate(e)}>
                                            <img src={window.location.origin+"/icons/calculator.svg"}/>
                                            <span className="text-muted">Calculator</span>
                                        </Link>

                                        <Link to="" className="w-h-btn help" style={{right:'20px'}}
                                              onClick={(e)=>{e.preventDefault();this.HelpShow()}}>
                                            <img src={window.location.origin+"/icons/help.svg"}/>
                                            <span className="text-muted">Help</span>
                                        </Link>
                                        <Modal show={this.state.HelpModal} onHide={this.HelpClose} animation={true}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Question Properties</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>{this.state.categorieTitle}</Modal.Body>
                                            <Modal.Body><b>Session Question:</b> 1 of 1</Modal.Body>
                                            <Modal.Body><b>Marked:</b> {this.state.mark?'No':'Yes'}</Modal.Body>
                                            <Modal.Footer >
                                                <Button variant="success" style={{padding: '8px 20px',margin: '0 2px'}} onClick={this.HelpClose}>
                                                    Return To Questions
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>

                                    <div className="w-content" style={{padding: '20px'}}>
                                        <p className="text-xs text-muted m-0" style={{width: 'max-content'}}>
                                            {this.state.categorieTitle}
                                            </p>
                                        <div className="ques" style={{margin:'24px 0'}}>
                                            <div className="ques-header">
                                                <h5>Question: 1</h5>
                                                <p>Internal auditors should be prudent in their relationships with
                                                    persons and organizations external
                                                    to their employers. Which of the following activities will most
                                                    likely not adversely affect internal
                                                    auditors’ ethical behavior?</p>
                                            </div>

                                            <div className="ques-body">
                                                <div className="ques-row">
                                                    <label className="control control-radio ques-radio">
                                                        A
                                                        <input type="radio" name="radio"/>
                                                    </label>
                                                    <p className="ques-res">Serving as consultants to competitor
                                                        organizations.</p>
                                                </div>

                                                <div className="ques-row">
                                                    <label className="control control-radio ques-radio">
                                                        B
                                                        <input type="radio" name="radio"/>
                                                    </label>
                                                    <p className="ques-res">Accepting compensation from professional
                                                        organizations for consulting work.</p>
                                                </div>

                                                <div className="ques-row">
                                                    <label className="control control-radio ques-radio">
                                                        C
                                                        <input type="radio" name="radio"/>
                                                            <div className="control_indicator"></div>
                                                    </label>
                                                    <p className="ques-res">Serving as consultants to suppliers.</p>
                                                </div>

                                                <div className="ques-row">
                                                    <label className="control control-radio ques-radio">
                                                        D
                                                        <input type="radio" name="radio"/>
                                                            <div className="control_indicator"></div>
                                                    </label>
                                                    <p className="ques-res">Serving as consultants to competitor
                                                        organizations.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ques-footer">
                                        <div className="ques-footer-flex">
                                            <div className="ques-footer-col">
                                                <span to="" className="btn mark-btn"
                                                      onClick={(e)=>{e.preventDefault();this.setState({mark:!this.state.mark})}}>
                                                    <i style={{backgroundImage: "url(" + window.location.origin+"/icons/flag.png" + ")"}}></i>
                                                    {this.state.mark?<span>Mark For Review</span>:<span>Remove Mark</span>}
                                                </span>
                                            </div>
                                            <div className="ques-footer-col">
                                                <Link to="" className="btn btn-sm btn-gray btn-back"
                                                      onClick={(e)=>{e.preventDefault()}}
                                                      style={{backgroundImage:"url(" + window.location.origin+"/icons/back.png" + ")"}}></Link>
                                                <Link to="" className="btn btn-sm btn-green btn-next"
                                                      onClick={(e)=>{e.preventDefault()}}
                                                      style={{backgroundImage:"url(" + window.location.origin+"/icons/next.png" + ")"}}></Link>
                                            </div>
                                        </div>
                                        <div className="ques-bottom" style={{float:'left'}}>
                                            <span className="time text-muted text-xs" style={{marginLeft:'20px'}}>Elapsed Time: {this.hhmmss(this.state.currentSessionTime)} </span>
                                            <span
                                                className="time text-muted text-xs">Average Time Per Question: {this.hhmmss(this.state.averageTimeForQuestions)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="t-menu-wrap" onClick={this.onToggleClass}>
                                    <div className="toggle-btn" style={{backgroundImage:"url(./icons/t-arrow-b.png)"}}>
                                        {this.state.bool?<div style={{backgroundImage:"url(" + window.location.origin+"/icons/t-arrow.png" + ")"}}></div>
                                            :<div style={{backgroundImage:"url(" + window.location.origin+"/icons/arrowb.svg" + ")",width:'40%'}}></div>}
                                    </div>
                                    <div className="t-menu bg-gray" style={{display:!this.state.bool?"none" :"block"}}>

                                        <div className="t-menu-header">
                                            <h4>Questions</h4>
                                            <div className="t-menu-labels">
                                                <span><div className="status gray"></div>Unanswered</span>
                                                <span><div className="status yellow"></div>Marked</span>
                                                <span><div className="status red"></div>Incorrect</span>
                                            </div>
                                        </div>

                                        <div className="t-menu-body" id="style-1">
                                            <ul className="unlisted ques-list">
                                                <li>
                                                    <div className="status red"></div>
                                                    <span className="ques-number text-xs">1(1.5.63)</span>
                                                </li>
                                                <li>
                                                    <div className="status yellow"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status green"></div>
                                                    <span className="ques-number text-xs">1(1.5.63)</span>
                                                </li>
                                                <li>
                                                    <div className="status green"></div>
                                                    <span className="ques-number text-xs">1(1.5.63)</span>
                                                </li>
                                                <li>
                                                    <div className="status green"></div>
                                                    <span className="ques-number text-xs">1(1.5.63)</span>
                                                </li>
                                                <li>
                                                    <div className="status red"></div>
                                                    <span className="ques-number text-xs">1(1.5.63)</span>
                                                </li>
                                                <li>
                                                    <div className="status red"></div>
                                                    <span className="ques-number text-xs">1(1.5.63)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105)</span>
                                                </li>
                                                <li>
                                                    <div className="status gray"></div>
                                                    <span className="ques-number text-xs">4(1.8.105) End</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="t-menu-footer">
                                            <ul className="t-menu-footer-list unlisted pd-0 m-0">
                                                <li>
                                                    <div className="status green"></div>
                                                    <span className="text-xs">Correct First Try</span><b
                                                    className="text-xs">0</b>
                                                </li>
                                                <li>
                                                    <div className="status green"></div>
                                                    <span className="text-xs">Currently Correct</span><b
                                                    className="text-xs">1</b>
                                                </li>
                                                <li>
                                                    <div className="status red"></div>
                                                    <span className="text-xs">Incorrect</span><b
                                                    className="text-xs">2</b>
                                                </li>
                                                <li>
                                                    <div className="status yellow"></div>
                                                    <span className="text-xs">Marked</span><b className="text-xs">4</b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>}
                    </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        categories:state.reducer.categories,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        // onGetCategory:(value)=>{dispatch({type: "GETCATEGORY",value})},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Test1)