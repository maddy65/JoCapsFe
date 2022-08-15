import React, { Component } from 'react';

class SignInLogin extends Component {

    constructor(props){
        super(props)
        this.state = {
           
        }
    }
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
                                    
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Username"></input>
                                </div>
                                <div class="mb-3">
                                    
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Password"></input>
                                    <a href="http://localhost:3000/Dashboard" class="nav-item nav-link"><span>Forget Password</span></a>
                            
                                </div>
                               
                                
                                
                            </div>


                            <div class="d-grid gap-2 col-112 mx-auto">
                                <button class="btn btn-primary" type="button">Button</button>
                            </div>
                           <div class="d-grid gap-2 col-112 mx-auto signupdiv">
                                <span class="signup-text">Already have an account?</span>
                                <a href="http://localhost:3000/Dashboard" class="nav-item nav-link"><span>Create Account</span></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default SignInLogin;