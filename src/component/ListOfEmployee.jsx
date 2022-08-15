import React, { Component } from 'react';
import EmployeeServicess from '../services/EmployeeServicess';
import { withRouter } from 'react-router-dom';

class ListOfEmployee extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
       /* this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this); */
    }

    addEmployee (){
        this.props.history.push(`/CreatePortfolio/`);
    }

    componentDidMount(){
        EmployeeServicess.getEmployees().then((res) =>{
            this.setState({employees:res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List </h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                       <td>{employee.fristName}</td> 
                                       <td>{employee.lastName}</td> 
                                       <td>{employee.emailId}</td> 
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

export default withRouter(ListOfEmployee);
//export default ListOfEmployee;