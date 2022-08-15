import React, { Component } from 'react';

import { withRouter } from 'react-router-dom' 




class CentralBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
        this.someText = this.someText.bind(this);
        
    }

    someText(){
        debugger;
        this.props.history.push(`/login/`);
    }


    render() {
        return (
            <div className="crentralPanel">
                <h1 class="CentralBarText">Learn by investing in Stocks.</h1>
                <p class="lead CentralBarPara">
                    One stop solution to get right stocks backed by innovative technology.
                </p>
                <button type="button" class="btn btn-light centerBarStartButton centerBarStartButtonImage" onClick={this.someText}>Start Now</button>
               
            </div>
        );
    }
}

export default withRouter(CentralBar);
//export default CentralBar;