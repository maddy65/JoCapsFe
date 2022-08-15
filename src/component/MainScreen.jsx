import React, { Component } from 'react';
import TopStrip from './TopStrip'
import MenuBar from './MenuBar'
import CentralBar from './CentralBar'
import VideoPanel from './VideoPanel'
import JoCapsBottom from './JoCapsBottom'
import DailyCalls from './DailyCalls'
import DematDiv from './DematDiv'

class MainScreen extends Component {
    render() {
        return (
           <div>

               <TopStrip />
               <MenuBar />
               <CentralBar/>
               <DailyCalls />
               <VideoPanel/>
              {/*  <DematDiv/> */}
               <JoCapsBottom/> 
           </div>
          
        );
    }
}

export default MainScreen;