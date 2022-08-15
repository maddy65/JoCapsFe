import React, { Component } from 'react';
import LoginNavBar from './../LoginNavBar';
import EmployeeServicess from './../../services/EmployeeServicess';
class CreatePortfolio extends Component {


    constructor(props){
        super(props)
        //debugger;
        this.state = {
            userId : 102,
            instrumentName : '',
            quantity : '',
            price : '',
            transictionDate :'',
            country: [],
            instrument: [],
            operationName : '',
            operation : [{
                "id" : "buy",
                "value" : "Buy"
            },{
                "id" : "sell",
                "value" : "Sell"
            }]
        }

        this.instrumentChange = this.instrumentChange.bind(this);
        this.changeQty = this.changeQty.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changePriceDate = this.changePriceDate.bind(this);
        this.operationName = this.operationName.bind(this);
        
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.clear = this.clear.bind(this);
        this.handlekeydown = this.handlekeydown.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount(){
        EmployeeServicess.getInstrument().then((res)=>{
            this.setState({instrument:res.data})
        });
    }

    operationName = (event) => {
        if (!event.nativeEvent.inputType) {
          event.target.blur();
        }
        this.setState({operationName: event.target.value}); 
    }

    instrumentChange = (event) => {
        if (!event.nativeEvent.inputType) {
          event.target.blur();
        }
        this.setState({instrumentName: event.target.value}); 
    }

    changeQty = (event)=>{
        this.setState({quantity: event.target.value});   
    }

    changePrice = (event) =>{
        this.setState({price : event.target.value});
    }

    changePriceDate= (event)=>{
        this.setState({transictionDate: event.target.value});
    }

    

    saveOrUpdateEmployee =(e) =>{
        e.preventDefault();
        //this.props.history.push('/UserDashboard');
        let transictionData = {
                        instrumentName: this.state.instrumentName, 
                        quantity : this.state.quantity,
                        price:this.state.price, 
                        transictionDate:this.state.transictionDate,
                        userId : this.state.userId
                     };
        console.log('transictionData => ' + JSON.stringify(transictionData));
        EmployeeServicess.saveTransiction(transictionData).then(res =>{
            this.props.history.push('/UserDashboard');
        }); 
    }

    cancel = (e) =>{
        e.preventDefault();
        this.props.history.push('/UserDashboard');
    }


    
   clear = (event) => {
        event.target.value = "";
    }
    
    handlekeydown = (e) =>{
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('do validate');
        }
    }

    blurEvent = (e) =>{
        //debugger;
        let me = this;
        let value = e.target.value;
        let instrument = me.state.instrument;
        var found = instrument.some(el => el.instrumentName === value);
        if(!found){
            e.target.value = "";
        }
    }


    
    render() {
        return (
            <div>
                <LoginNavBar />
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <div className = "card-body">
                                <form>
                                <div className = "form-group formSpacing">
                                    <label for="exampleDataList" class="form-label">Operation</label>    
                                    <input class="form-control" list="datalistOptionsoperation" id="exampleDataListOp" onChange={this.operationName} onClick={this.clear}
                                        onFocus={this.clear} onKeyDown={this.handlekeydown}>
                                        </input>        
                                    <datalist id="datalistOptionsoperation">
                                        {this.state.operation.map(operation => (
                                                <option 
                                                    key={operation.id}
                                                    value={operation.value}
                                                    >
                                                    {operation.value}
                                                </option>
                                            ))}
                                        </datalist>    

                                </div>
                                <div className = "form-group formSpacing">
                                    <label for="exampleDataList" class="form-label">Instrument Name</label>    
                                    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." onChange={this.instrumentChange} onClick={this.clear}
                                        onFocus={this.clear} onKeyDown={this.handlekeydown} onBlur={this.blurEvent}>
                                        </input>        
                                    <datalist id="datalistOptions">
                                        {this.state.instrument.map(instrument => (
                                                <option 
                                                    key={instrument.id}
                                                    value={instrument.instrumentName}
                                                    >
                                                    {instrument.instrumentName}
                                                </option>
                                            ))}
                                        </datalist>    

                                </div>
                                    <div className = "form-group formSpacing">
                                            <label> Quantity </label>
                                            <input type="number" placeholder="Qty" name="quantity" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeQty} onKeyDown={this.handlekeydown}/>
                                    </div>
                                    <div className = "form-group formSpacing">
                                        <label>Price</label>
                                        <input type="number" placeholder="Cost" name="price" className="form-control" 
                                            value={this.state.lastName} onChange={this.changePrice} onKeyDown={this.handlekeydown}/>
                                    </div>
                                    <div className = "form-group formSpacing">
                                        <label> Purchage Date </label>
                                        <input type="date"  name="purchase" className="form-control" 
                                            value={this.state.emailId} onChange={this.changePriceDate} onKeyDown={this.handlekeydown}/>
                                    </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-success formcancelmargin" onClick={this.cancel}>Cancel</button>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CreatePortfolio;