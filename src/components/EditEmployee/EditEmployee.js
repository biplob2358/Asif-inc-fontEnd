import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const EditEmployee = () => {
    const storedEmployee = useLoaderData();
    const { firstName, lastName, email, phone } = storedEmployee;
    const [employee, setEmployee] = useState(storedEmployee);

    const handleEditEmployee = event => {
        event.preventDefault();
        // console.log(employee)
        fetch(`http://localhost:5000/allemployee/${storedEmployee._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Updated")
                }
            })

    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newEmployee = { ...employee }
        newEmployee[field] = value;
        setEmployee(newEmployee);

    }

    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <h2 className="text-3xl mt-4 text-center font-bold">Edit Employee Information</h2>
            <div className=' p-7 mb-10 border-solid border-2 mt-7 mx-10 border-blue-200 drop-shadow-lg rounded'>

                <form onSubmit={handleEditEmployee}>
                    <div className='grid lg:grid-cols-1 grid-cols-1 gap-4'>

                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">First Name</span></label>
                            <input type="text"
                                name='firstName'
                                required
                                onChange={handleInputChange}
                                defaultValue={firstName}
                                className="input input-bordered w-full  " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Last Name</span></label>
                            <input type="text"
                                required
                                name='lastName'
                                onChange={handleInputChange}
                                defaultValue={lastName}
                                className="input input-bordered w-full  " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email"
                                name='email'
                                onChange={handleInputChange}
                                defaultValue={email}
                                disabled
                                className="input input-bordered w-full  " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Phone Number</span></label>
                            <input type="text"
                                required
                                name='phone'
                                onChange={handleInputChange}
                                defaultValue={phone}
                                className="input input-bordered w-full  " />
                        </div>


                    </div>




                    <button className='btn btn-primary mt-4 flex bg-blue-500 w-72 mx-auto' type="submit">Update</button>
                </form>

            </div>
        </div>
    );
};

export default EditEmployee;