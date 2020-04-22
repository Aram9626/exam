import React,{Component} from 'react';


export default class Com1 extends Component{
    render() {
        return(
            <div className='component1'>
                <div className="col-md-5">
                    <div className="section-header">
                        <h1 className="section-title">Why our <span className="text-green">GRE</span> program is #1</h1>
                    </div>
                    <p><b>The Most Comprehensive Coverage</b></p>
                    <p className="mb-50 mt-0 text-muted">You will be 100% prepared for exam, because we provide the most
                        complete coverage question bank, with the best solutions and explanations. </p>
                    <ul className="adding unlisted">
                        <li>
                            <img src="https://img.icons8.com/android/24/000000/plus.png"/>
                            TRULY ADAPTIVE TECHNOLOGY
                        </li>
                        <li>
                            <img src="https://img.icons8.com/android/24/000000/plus.png"/>
                            Real Exam emulation
                        </li>
                    </ul>
                </div>
                <div>
                    <img className='img' src={window.location.origin+"/you-x-ventures-1447895-unsplash.jpg"}/>
                </div>
            </div>
        )
    }
}