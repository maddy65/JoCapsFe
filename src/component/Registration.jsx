import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'    
import EmployeeServicess from '../services/EmployeeServicess';

class Registration extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            mobile : '',
            username : '',
            password : ''
        }
        this.changemobile = this.changemobile.bind(this);
        this.changeusername = this.changeusername.bind(this);
        this.changepassword = this.changepassword.bind(this);
        this.changeemail =this.changeemail.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.nseData = this.nseData.bind(this);

    }

    changemobile(event){
        this.setState({mobile: event.target.value});
    }
    changeusername(event){
        this.setState({username: event.target.value});
    }
    changepassword(event){
        this.setState({password: event.target.value});
    }
    changeemail(event){
        this.setState({email: event.target.value});
    }
    nseData(){
       this.props.history.push(`/UserDashboard/`);
    }

    registerUser(){
        let userRegistation = {
            mobile : this.state.mobile, 
            username : this.state.username,
            pasword : this.state.password, 
            email : this.state.email
        };
        console.log('userRegistation => ' + JSON.stringify(userRegistation));
        EmployeeServicess.saveRegisterData(userRegistation).then(res =>{
           debugger;
            this.props.history.push('/UserDashboard');
        });
    }

    
    render() {
        return (
           

                <div>
                    <div>
                        <h1 class="login-header">My Account</h1>
                    </div>
                    <div class="u-columns col2-se">

                        <div class="row" >
                            <div class="col-lg-5  registration" >
                                <h2 class = "loginlabels">Login</h2>
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address  <span class="required">*</span></label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password   <span class="required">*</span></label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={this.nseData}>Log In</button>
                                    <div>
                                        <a id="emailHelp" class="form-text">Forget Password ? </a>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-5 registration">
                                <h2 class = "loginlabels">Register</h2>
                                <form >
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address   <span class="required">*</span></label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.changeemail}></input>
                                        
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password   <span class="required">*</span></label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={this.changepassword}></input>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Username <span class="required">*</span></label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={this.changeusername}></input>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Mobile <span class="required">*</span></label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={this.changemobile}></input>
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={this.registerUser}>Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            
        );
    }
}

export default withRouter(Registration);
//export default Registration;