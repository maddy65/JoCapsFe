import React, { Component } from 'react';

class HeaerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
     
    }
    render() {
        return (
            <div>
                <header>
                    <nav className= "navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://twiiter.com" className="navbar-brand">Employee Managment App</a></div>
                    </nav>
                </header>    
            </div>
        );
    }
}

export default HeaerComponent;