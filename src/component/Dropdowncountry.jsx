import React, { Component } from 'react';
import EmployeeServicess from '../services/EmployeeServicess';


class Dropdowncountry extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            country: [],

        };
    }

    componentDidMount(){
        EmployeeServicess.getCountryDropdown().then((res)=>{
            this.setState({country:res.data})
        });
    }
    render() {
        return (
            
            <div class="dropdown countrydropdown">
                <select name="country" >
                    {this.state.country.map(country => (
                        <option 
                            key={country.id}
                            value={country.countryList}
                            >
                            {country.countryList}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Dropdowncountry;