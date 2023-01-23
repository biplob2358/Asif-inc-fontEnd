import React from 'react';
import { useForm } from 'react-hook-form';

const AddPeople = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleAddEmployee = data => {

    }
    return (
        <div className='container mx-auto'>
            <h2 className="text-3xl mt-4 text-center font-bold">Add A Employee</h2>
            <div className=' p-7 mb-10 border-solid border-2 mt-7 mx-10 border-blue-200 drop-shadow-lg rounded'>

                <form onSubmit={handleSubmit(handleAddEmployee)}>
                    <div className='grid lg:grid-cols-1 grid-cols-1 gap-4'>

                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">First Name</span></label>
                            <input type="text"
                                {...register("firstName", { required: "First name is required" })}
                                className="input input-bordered w-full  " />
                            {errors.firstName && <p className='text-red-600'>{errors.firstName?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Last Name</span></label>
                            <input type="text"
                                {...register("lastName", { required: "Last name is required" })}
                                className="input input-bordered w-full  " />
                            {errors.lastName && <p className='text-red-600'>{errors.lastName?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email"
                                {...register("email", { required: "Email name is required" })}
                                className="input input-bordered w-full  " />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Phone</span></label>
                            <input type="text"
                                {...register("phone", { required: "Phone number is required" })}
                                className="input input-bordered w-full  " />
                            {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                        </div>

                    </div>





                    <input className='btn btn-primary mt-4 flex bg-blue-500 w-72 mx-auto' type="submit" value="Add New" />
                </form>

            </div>
        </div>
    );
};

export default AddPeople;