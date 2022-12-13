import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices'

class ListEmployeeComponent extends Component {

    //invoke constructor and declare state variables 
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    // create delete button using the filter method of an array to filter out the deleted employee(s)

    deleteEmployee(id){
        EmployeeServices.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    //View button will navigate to the View Employee page

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    // Update button will navigate to the Update Employee page
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    // Execute when componenent is called the first time and fetches the 'employees' from API to populate the state variable 'employees'
    componentDidMount(){
        EmployeeServices.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    // Add employee button will navigate to Add Employee page

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    //creating the loop with the map operator to loop over the employees list and create the view
    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent