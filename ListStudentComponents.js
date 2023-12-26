import React, { Component } from 'react';
import StudentService from '../services/StudentService';
class ListStudentComponents extends Component {
    constructor(props)
    {
        super(props)
        this.state ={
            student:[]
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent=this.deleteStudent.bind(this);
       this.viewStudent=this.viewStudent.bind(this);
    }
    viewStudent(id)
    {
        this.props.history.push(`/view-student/${id}`);
    }
    deleteStudent(id)
    {
        StudentService.deleteStudent(id).then(res => {
           this.setState({student: this.state.student.filter(student => student.id !== id)});
        });
    }
    editStudent(id)
    {
        this.props.history.push(`/add-student/${id}`);
    }
    componentDidMount()
    {
        StudentService.getStudent().then((res) =>
        {
            this.setState({ student:res.data});
        });
    }
    addStudent()
    {
        this.props.history.push('/add-student/-1');
    }
    render() {
        return (
            <div>
                
                <h2 className="text-center">Student List</h2>
                
                <button className="btn btn-primary btn-sm"onClick={this.addStudent}>Add Student</button>
               
                 <div className="row">
                            <table className="table table-striped table-bordered">
                             <thead>
                                    <tr>
                                        <th>Student First Name</th>
                                        <th>Student Last Name</th>
                                        <th>Student Email Id</th>
                                        <th>Actions</th>
                                   </tr>
                            </thead>
                              <tbody>
                                {
                                    this.state.student.map(
                                        student =>
                                        <tr key={student.id}>
                                            <td>{student.firstName}</td>
                                            <td>{student.lastName}</td>
                                            <td>{student.emailId}</td>
                                            <td>
                                                <button onClick={ () => this.editStudent(student.id)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft:"10px"}} onClick={ () => this.deleteStudent(student.id)} className="btn btn-danger">Delete</button>
                                                <button style={{marginLeft:"10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-success">View</button>

                                            </td>
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

export default ListStudentComponents;
