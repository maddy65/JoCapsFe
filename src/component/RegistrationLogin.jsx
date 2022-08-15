import React, { Component } from 'react';

class RegistrationLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
           personname : '',
           email : '',
           mobile : '',
           username : '',
           password : '',
           exchange : 'NSE'
        }

       /*  this.personname = this.personname.bind(this);
        this.changemobile = this.changemobile.bind(this);
        this.changepassword = this.changepassword.bind(this);
        this.changeemail =this.changeemail.bind(this);
        
        this.registerUser = this.registerUser.bind(this); */
        this.changeusername = this.changeusername.bind(this);
       
    }

    changeusername(event){
        debugger;
        this.setState({username: event.target.value});
    }
   /*  personname(event){
        this.setState({personname: event.target.value});
    }

    changemobile(event){
        debugger;
        var ASCIICode = (event.which) ? event.which : event.keyCode
            if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){

            }else{
                 this.setState({mobile: event.target.value});
            }
       
    }
    changepassword(event){
        this.setState({password: event.target.value});
    }
    changeemail(event){
        this.setState({email: event.target.value});
    } */
    
    render() {
        return (
            <div>
                <div className="minimal-frame">
                    <div className="minimal-wrapper">
                        <div className="minimal-body">
                            <div className="login-heading">
                                <div className="JoCapsLogo">
                                    <img src="../Logo.jpg" width="50" height="50" alt=""></img>
                                </div>
                                <h2>JoCaps</h2>
                                <div>
                                    <p className="tagline">Compunding is 8th wonder of world.</p>
                                </div>
                            </div>
                            <div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="InputName" placeholder="Name" onChange={this.changeusername}></input>
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                                </div>
                                <div class="mb-3">
                                    
                                    <input type="text" class="form-control" id="InputUsername" placeholder="Username"></input>
                                </div>
                                <div class="mb-3">
                                    
                                    <input type="password" class="form-control" id="InputPassword" placeholder="Password"></input>
                                </div>
                                <div class="mb-3">
                                   
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Mobile Number"></input>
                                </div>
                                
                                
                            </div>


                            <div class="d-grid gap-2 col-112 mx-auto">
                                <button class="btn btn-primary" type="button">Button</button>
                            </div>
                            <div class="d-grid gap-2 col-112 mx-auto signupdiv">
                                <span class="signup-text">Already have an account?</span>
                                <a href="http://localhost:3000/Dashboard" class="nav-item nav-link"><span class="signupPadding">Sign in</span></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationLogin;