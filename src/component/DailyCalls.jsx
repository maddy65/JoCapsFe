import React, { Component } from 'react';
import EmployeeServicess from '../services/EmployeeServicess';
class DailyCalls extends Component {

    constructor(props){
    super(props)

    this.state = {
        exchange : 'NSE',
        dailyCallData : []
    }

}
componentDidMount(){
    let exchange = this.state.exchange;
    EmployeeServicess.getDailyCalls(exchange).then((res)=>{
        debugger;
        let response = res.data;

        let uniqueDates = response.reduce((acc, rec) => {
            if(acc.includes(rec.dailyDate))
              return acc;
            return [...acc, rec.dailyDate]
        }, []);
        let dailyDateData = uniqueDates.reduce((acc, rec)=> {
            var data = response.filter(i => i.dailyDate === rec).map(i => {
                delete i.dailyDate
                return i
            })
            debugger;
            let headingOne = "flush"+rec.substring(rec.length - 2);
            let collapseOne = "flush"+rec.substring(rec.length - 5);
            return [...acc, {date: rec, data,headingOne,collapseOne}]
        }, [])
        this.setState({dailyCallData:dailyDateData})
    });
}
render() {
        return (
        <div>
        <div class="card">
            <div class="card-body">
                JoCaps Daily Calls
            </div>
        </div>
        
        <div class="">
            <div class="row gx-5">
            {this.state.dailyCallData.map(calls => (
                
                <div class="col">
                  

                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id={calls.headingOne}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+calls.collapseOne} aria-expanded="false" aria-controls={calls.collapseOne}>
                               {calls.date}
                            </button>
                            </h2>
                            <div id={calls.collapseOne} class="accordion-collapse collapse" aria-labelledby={calls.headingOne} data-bs-parent="#accordionFlushExample">
                                <div class="">
                                    <div>
                                            {calls.data.map(data => (
                                                <table class="table table-bordered border-primary">
                                                <tr>
                                                    <th>Instrument</th>
                                                    <td>{data.stockName}</td>
                                                </tr>
                                                <tr>
                                                    <th>Target</th>
                                                    <td>{data.target}</td>
                                                   
                                                </tr>
                                                    <th>Stop Loss</th>
                                                    <td>{data.stopLoass}</td>
                                                <tr>
                                                    
                                                </tr>
                                                
                                                </table>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           ))}
               
        </div>
        </div>
        </div>
        );
    }
}
export default DailyCalls;