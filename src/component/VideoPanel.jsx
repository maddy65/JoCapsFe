import React, { Component } from 'react';

class VideoPanel extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
     
    }


    render() {
        return (
            <div class="container">
                <div class="row">

                    <div class="col-3">
                    <div class="wpb_wrapper">
                        <h2 className="videoPanelText">Taking<span className="colorlight"> investment</span> process to the next level.</h2>

                    </div>
                        <button type="button" class="btn btn-primary btn-lg">Join Now</button>
                    </div>

                    <div class="col-4">
                        <iframe src="https://player.vimeo.com/video/101750865?theme=none&amp;wmode=opaque" width="903" height="551" frameborder="0" title="Joshua Klein: Invest in Your Network and Your Network Will Invest in You" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPanel;