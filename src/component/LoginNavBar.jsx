import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@popperjs/core";
 import "bootstrap";


class LoginNavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light loginTopNav">
                

                    <a href="http://localhost:3000/UserDashboard" class="navbar-brand"><i class="fa fa-cube"></i><img src="../Logo.jpg" width="90" height="80" alt=""></img></a>  	
                    
                    <div id="navbarCollapse" class="collapse navbar-collapse justify-content-end loginTopNavContentPadding">		
                        
		                <div class="navbar-nav ml-auto">
                            <a href="http://localhost:3000/Dashboard" class="nav-item nav-link"><span>Dashboard</span></a>
                            <a href="http://localhost:3000/UserDashboard" class="nav-item nav-link"><span>Portfolio</span></a>
                            <a href="http://localhost:3000/Pricing" class="nav-item nav-link"><span>JoCaps</span></a>
                            <a href="#" class="nav-item nav-link"><span>Services</span></a>		
                            <a href="#" class="nav-item nav-link"><span>Notification</span></a>
			                
                            <div class="dropdown">
                                <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle user-action">
                                    <img class = "loginImage" src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" class="bi bi-person" alt="Avatar"></img>
                                </a> 
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="#" class="dropdown-item"> Profile</a>
                                    </li> 
                                    <li>
                                        <a href="#" class="dropdown-item"> Profile</a>
                                    </li> 
                                    <li>
                                        <a href="#" class="dropdown-item"> Profile</a>
                                    </li> 
                                    <li>
                                        <a href="#" class="dropdown-item">Profile</a>
                                    </li> 
                                   {/*  <a href="#" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendar</a>
                                    <a href="#" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</a>
                                    <div class="divider dropdown-divider"></div>
                                    <a href="#" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</a> */}
                                </ul>
			                </div>
		                </div>
	                </div>
                </nav>
            </div>
        );
    }
}

export default LoginNavBar;