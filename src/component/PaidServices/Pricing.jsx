import React, { Component } from 'react';
import LoginNavBar from './../LoginNavBar';
import JoCapsBottom from './../JoCapsBottom'


class Pricing extends Component {
    constructor(props){
        super(props)
        this.state = {
           service : "Rs. 999/Year",
           premier : "Rs. 1299/Quater",
           analysis : "Rs. 4999/Share"
        }
        
    }
    
    render() {
        return (

            <div>
                 <LoginNavBar />
                 <div component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className = "pricing">
                    <p class="text-center pricingText">Pricing</p>
                    <p class="text-center pricingDesc">Build your effective portfolio. Here is what we offer.</p>
                    <p class="text-center pricingDetails">JoCaps Share details || JoCaps Premier Calls || JoCaos Analysis services</p>
                </div>
                
                <div class="container">
                        <div class="row align-items-start">
                            <div class="col">
                                <div class="card">
                                    <div class="card-body" align="center">
                                        <h5 class="card-title">JoCaps Share</h5>
                                        <p class="card-text">Top Picks of 30 stocks from all the indices, which can maximum returns.</p>
                                        <p class="card-text">Quaterly Review of stocks performance.Addition and Dedduction of shares on quarter to quarter basis.</p>
                                        <p class="card-text">You can access JoCaps Share to build long term compundable portfolio.</p>
                                        <a href="#" class="btn btn-primary">{this.state.service}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card-body" align="center">
                                        <h5 class="card-title">JoCaps Premier Calls</h5>
                                        <p class="card-text">Every weeks two calls which will be based on JoCaps algorithm.</p>
                                        <p class="card-text">Performance of share which is based on JoCaps calls are very high. Calls for both Intraday or position</p>
                                        <p class="card-text">You can access JoCaps Share to build long term compundable portfolio.</p>
                                        <a href="#" class="btn btn-primary">{this.state.premier}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                            <div class="card">
                                    <div class="card-body" align="center">
                                        <h5 class="card-title">JoCaps Analysis</h5>
                                        <p class="card-text">Complete Fundamental and Technical Analysis a</p>
                                        <p class="card-text">In Depth analysis of company with finance, graphs, growth, competetor, balance sheet and  Managment Details. </p>
                                        <p class="card-text">Complete analysis and will share strong, weekness, oppertunity and threat of share.</p>
                                        <a href="#" class="btn btn-primary">{this.state.analysis}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
                <JoCapsBottom/> 
            </div>
        );
    }
}

export default Pricing;