import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const EmployeeList = () => {
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
            {
                console.log(employees)
            }
        </div>
    );
};

export default EmployeeList;