import React, { Component } from 'react';
import TopStrip from './TopStrip'
import MenuBar from './MenuBar'
import JoCapsBottom from './JoCapsBottom'
import Registration from './Registration'
import RegistrationLogin from './RegistrationLogin'


class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
             {/*    <TopStrip />
                <MenuBar /> */}
              {/*   <Registration/> */}
                <RegistrationLogin/>
               {/*  <JoCapsBottom/>  */}
            
            </div>
        );
    }
}

export default Login;