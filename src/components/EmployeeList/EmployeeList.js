import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

import DeleteModal from '../DeleteModal/DeleteModal';
import Navbar from '../Navbar/Navbar';

const EmployeeList = () => {
    const [deleteingEmployee, setDeleteingEmployee] = useState(null);




    const closeModal = () => {
        setDeleteingEmployee(null);
    }
    const handleDeleteEmployee = async (employee) => {
        // console.log(employee);
        try {
            await axios.delete(`http://localhost:5000/allemployee/${employee._id}`)
                .then(() => {
                    window.location.reload();
                })
        } catch (error) {
            console.log(error)
        }


    }
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allemployee')
            .then(data => {
                const allemployees = data.data;

                setEmployees(allemployees)
            })



    }, [])

    const handeleMakeBlock = id => {
        axios.put(`http://localhost:5000/allemployee/role/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)


            })
        toast.success('Block succesffuly')
        window.location.reload()
        // fetch(`http://localhost:5000/allemployee/role/${id}`, {
        //     method: 'PUT'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         toast.success('Block succesffuly')

        //     })
    }
    const handeleMakeUnBlock = id => {
        axios.put(`http://localhost:5000/allemployee/blockRole/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)


            })
        toast.success('Unblock succesffuly')
        window.location.reload()
        // fetch(`http://localhost:5000/allemployee/blockRole/${id}`, {
        //     method: 'PUT'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         toast.success('Unblock succesffuly')
        //         window.location.reload()
        //     })
    }


    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <h2 className="text-3xl mt-4 mb-4 text-center font-bold">All Employee</h2>

            <div className="overflow-x-auto">
                <table className="table w-1/2 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-center'>Full Name</th>
                            <th className='text-center'>Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee, i) => <tr key={employee._id}>
                                <th>{i + 1}</th>
                                <td className='text-center'>{employee.firstName} {employee.lastName}</td>
                                <td className='text-center'>
                                    <Link to={`/edit/${employee._id}`}>
                                        <button className="btn  btn-xs btn-primary mr-2">Edit</button>
                                    </Link>

                                    {employee?.role === 'block' ?
                                        <>
                                            < button onClick={() => handeleMakeUnBlock(employee._id)} className="btn  btn-xs btn-primary mr-2">
                                                Unblock
                                            </button>
                                        </>
                                        :
                                        <> < button onClick={() => handeleMakeBlock(employee._id)} className="btn  btn-xs btn-primary mr-2">
                                            Block
                                        </button></>

                                    }
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
        </div >
    );
};

export default EmployeeList;