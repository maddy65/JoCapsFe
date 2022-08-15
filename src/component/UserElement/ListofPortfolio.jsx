import React, { Component } from 'react';
import EmployeeServicess from './../../services/EmployeeServicess';

class ListofPortfolio extends Component {

    constructor(props){
        super(props)

        this.state = {
            transictionRec: [],
            curVal : 0,
            investVal : 0
        }
        
    }

    componentDidMount(){
        debugger;
        EmployeeServicess.getTransiction().then((res) =>{
            let gridResult = res.data;

            gridResult.forEach((element, index, array) =>{
                element.investmentVal = element.price * element.quantity;
                element.currentVal = element.ltp * element.quantity;


            })
             this.setState({transictionRec:res.data})
        });
    }


    render() {
        return (
            <div className="portfolioGrid">
            
            <div className="row ">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Quantity</th>
                            <th>Avg. Cost</th>
                            <th>LTP</th>
                            <th>Invested Value</th>
                            <th>Current Value</th>
                            <th>JoCaps Indicator</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.transictionRec.map(
                                record =>
                                <tr key = {record.id}>
                                   <td>{record.instrument_Name}</td> 
                                   <td>{record.quantity}</td> 
                                    <td>{record.price}</td> 
                                   <td>{record.ltp}</td> 
                                   <td>{record.investmentVal}</td> 
                                   <td>{record.currentVal}</td> 
                                   <td>{record.jo_Caps}</td>
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

export default ListofPortfolio;