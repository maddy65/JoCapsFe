import React, { Component } from 'react';
import LoginNavBar from './../LoginNavBar';
import ListOfEmployee from './../ListOfEmployee';
import ListofPortfolio from './ListofPortfolio';
import { withRouter } from 'react-router-dom';
import EmployeeServicess from './../../services/EmployeeServicess';


class UserDashboard extends Component {


    constructor(props){
        super(props)
        this.state = {
            currVal : 0,
            investVal : 0
        }
        this.addtransiction = this.addtransiction.bind(this);
        
    }

    addtransiction(){
        this.props.history.push(`/CreatePortfolio/`);
    }


    componentDidMount(){
        debugger;
        EmployeeServicess.getTransiction().then((res) =>{
            let gridResult = res.data;
            let currVal = 0;
            let investVal = 0; 
            gridResult.forEach((element, index, array) =>{
                element.investmentVal = element.price * element.quantity;
                element.currentVal = element.ltp * element.quantity;
                currVal += element.currentVal;
                investVal += element.investmentVal;

            });
            this.setState({currVal: currVal});
            this.setState({investVal:investVal});
        });
    }

    render() {
        return (
            <div>
                 <LoginNavBar />
                 <nav class="navbar navbar-expand-lg navbar-light bg-light loginTopNav">
                    <div id="navbarCollapse" class="collapse navbar-collapse  loginTopNavContentPadding">		
                        
                        <div class="navbar-nav ml-auto ">
                            <p class="currentValueDisplay">Current value : {this.state.currVal}</p>
                            <p class="currentValueDisplay"></p>
                        </div>

                        <div class="navbar-nav ml-auto ">
                            <p class="currentValueDisplay">Investment Value : {this.state.investVal}</p>
                           
                        </div>
                        
                        <div id="navbarCollapse" class="collapse navbar-collapse justify-content-end loginTopNavContentPadding">		
                        
                            <div class="navbar-nav ml-auto ">
                                <button type="button" class="btn btn-secondary btn-lg transictopnButton" onClick={this.addtransiction}>Add Transiction</button>
                            </div>
                        </div>
                    </div>
                 </nav>
                 <ListofPortfolio />
            </div>
        );
    }
}

export default withRouter(UserDashboard);