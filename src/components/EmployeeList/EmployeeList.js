import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import Navbar from '../Navbar/Navbar';

const EmployeeList = () => {
    const [deleteingEmployee, setDeleteingEmployee] = useState(null);
    const closeModal = () => {
        setDeleteingEmployee(null);
    }
    const handleDeleteEmployee = employee => {
        console.log(employee);
    }
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allemployee')
            .then(data => {
                const allemployees = data.data;

                setEmployees(allemployees)
            })



    }, [])
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <h2>All Employee</h2>

            <div className="overflow-x-auto">
                <table className="table w-1/2 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Full Name</th>
                            <th>Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee, i) => <tr key={employee._id}>
                                <th>{i + 1}</th>
                                <td>{employee.firstName} {employee.lastName}</td>
                                <td>
                                    <label onClick={() => setDeleteingEmployee(employee)} htmlFor="delete-modal" className="btn  btn-xs btn-error">Delete</label>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteingEmployee && <DeleteModal
                    title={`Are You sure want delete?`}
                    message={`If You delete ${deleteingEmployee.firstName} ${deleteingEmployee.lastName}.It can't be undone`}
                    successDelete={handleDeleteEmployee}
                    modalData={deleteingEmployee}
                    closeModal={closeModal}
                >

                </DeleteModal>
            }
        </div>
    );
};

export default EmployeeList;