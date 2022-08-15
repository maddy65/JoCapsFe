import React, { Component } from 'react';
import Dropdowncountry from './Dropdowncountry';

class TopStrip extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
     
    }


    render() {//avbar-expand-md navbar-dark bg-dark
        return (
            <div>
                <div className= "navbar  Navbar-expand-md navbar-dark bg-dark">
                        <span class="bi bi-lightbulb-fill  headerText" >  Get 5 Stock specific investment idea everyday</span>
                        <span class="bi bi-clock-fill headerText">  9 AM </span>
                        <Dropdowncountry />
                </div>
            </div>
        );
    }
}

export default TopStrip;