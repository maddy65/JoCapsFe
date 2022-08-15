import React, { Component } from 'react';
import EmployeeServicess from '../services/EmployeeServicess';
import TopStrip from './TopStrip';
import MenuBar from './MenuBar';
import JoCapsBottom from './JoCapsBottom';


class FAQ extends Component {

    constructor(props){
        super(props)
    
        this.state = {
            faq : []
        }
     
    }

    componentDidMount(){
        EmployeeServicess.getFaqData().then((res)=>{
            this.setState({faq:res.data})
        })
    }

    render() {
        return (
            <div>
                <TopStrip />
                <MenuBar />
                {this.state.faq.map(faq => (
                    <div class="accordion accordion-flush faqstyle" id="accordionFlushExample">

                        <div class="accordion-item">
                            <h2 class="accordion-header" id={faq.titleId}>
        
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+faq.tagId} aria-expanded="false" aria-controls={faq.tagId}>
                                {faq.title}
                                </button>
                                
                            </h2>

                            <div id={faq.tagId} class="accordion-collapse collapse" aria-labelledby={faq.titleId} data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">{faq.answer}</div>
                            </div>
                        </div>
                    </div>


                ))}
                
                <JoCapsBottom/> 
            </div>
        );
    }
}

export default FAQ;