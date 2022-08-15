import React, { Component } from 'react';

class MenuBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
     
    }


    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light loginTopNav">
                

                    <a href="http://localhost:3000/" class="navbar-brand"><i class="fa fa-cube"></i><img src="../Logo.jpg" width="90" height="80" alt=""></img></a>  	
                    <div id="navbarCollapse" class="collapse navbar-collapse justify-content-end loginTopNavContentPadding">		
                        
		                <div class="navbar-nav ml-auto ">
                            <a href="/FAQ" class="nav-item nav-link"><span>FAQ</span></a>
                            <a href="/login" class="nav-item nav-link"><span>My Account</span></a>
                                <button class="hemburgerMenu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header">
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                    <ul>
                                        <li><a class="nav-item nav-link" href="https://mnkythemes.com/fintechwp/geneva/" aria-current="page">Home</a></li>
                                        <li><a class="nav-item nav-link" href="https://mnkythemes.com/fintechwp/geneva/company-blog/">Blog</a></li>
                                        <li>
                                            <a class="nav-item nav-link"href="#">About Company</a>
                                            <ul class="sub-menu">
                                                <li><a class="nav-item nav-link" href="https://mnkythemes.com/fintechwp/geneva/services/">JoCaps Services</a></li>
                                                <li><a class="nav-item nav-link"href="https://mnkythemes.com/fintechwp/geneva/testimonials/">Performance</a></li>
                                                <li><a class="nav-item nav-link" href="https://mnkythemes.com/fintechwp/geneva/pricing/">Pricing Options</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-438" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-438">
                                            <a class="nav-item nav-link" href="#">Help and Contacts</a>
                                            <ul class="sub-menu">
                                                <li><a class="nav-item nav-link" href="https://mnkythemes.com/fintechwp/geneva/contact-us/">Contact Page</a></li>
                                                <li><a class="nav-item nav-link" href="https://mnkythemes.com/fintechwp/geneva/help-center/">Help Center</a></li>
                                            </ul>
                                        </li>
                                        </ul>
                                    </div>
                                </div>


                        </div>
	                </div>
                </nav>
            </div>
        );
    }
}

export default MenuBar;