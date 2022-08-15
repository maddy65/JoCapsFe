import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props)
    
        this.state = {
        }
    }   
    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All rights are reserved 2020 @Ole</span>
                </footer>
            </div>
        );
    }
}

export default Footer;