import React, { Component } from 'react';
import EmployeeServicess from '../services/EmployeeServicess';
import LoginNavBar from '../component/LoginNavBar';

class NSEdata extends Component {

    constructor(props){
        super(props)

        this.state = {
            nseData: []
        }
    }


    componentDidMount(){
        EmployeeServicess.getNseData().then((res) =>{
            this.setState({nseData:res.data})
        });
    }

    render() {
        return (
            <div>
                <LoginNavBar />
                <h2 className="text-center">NSE data for today </h2>
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Today</th>
                                <th>Open</th>
                                <th>High</th>
                                <th>Low</th>
                                <th>LTP</th>
                                <th>Change</th>
                                <th>%change</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.nseData.map(
                                    nseData =>
                                    <tr key = {nseData.id}>
                                       <td>{nseData.symbol}</td> 
                                       <td>{nseData.open}</td> 
                                       <td>{nseData.high}</td> 
                                       <td>{nseData.low}</td> 
                                       <td>{nseData.ltp}</td> 
                                       <td>{nseData.ptsC}</td> 
                                       <td>{nseData.per}</td> 
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default NSEdata;