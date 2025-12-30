import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';




const Register = () => {
    // const location = useLocation();
    const navigate = useNavigate();

    // const redirectTo = location.state?.from || "/login";
    // navigate(redirectTo);


    const [form, setform] = useState({ dotnumber: "", firstname: "", email: "", lastname: "", phone: "", companyname: "", password: "" })

    const handleonchange = (event) => {
        setform((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleonsubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: form.firstname,
                email: form.email,
                password: form.password
            })
        });

        const data = await res.json();

        if (res.ok) {

            toast.success("Register is sucesss")
            navigate("/login");
        } else {
            toast.error(data.message);
        }
    };


    return (
        <div className='flex w-full  justify-center h-300 items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white '>
            <div className='w-130  flex flex-col h-230 mt-25 rounded-md  pt-10 px-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <h2 className='flex text-2xl font-sans'>Create Your Account</h2>
                <p className='text-lg font-sans'>Join us to stay compliant and grow your business.</p>
                <div className='flex flex-col  gap-10 justify-center ' >
                    <form action="" onSubmit={handleonsubmit} className='flex flex-col gap-7'>
                        <div className='flex flex-col pt-5'>
                            <label htmlFor="dotnumber" className='text-md font-sans mb-1 '>Dot Number*</label>

                            <input type="text" name='dotnumber' onChange={handleonchange} placeholder="Enter your Dot Number" className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                        </div>

                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor="firstname" className='text-sm mb-1 font-medium'>Full Name*</label>

                                <input type="text" name='firstname' onChange={handleonchange} placeholder='Enter a FirstName' className='px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="Lastname" className='text-sm mb-1 font-medium'>Last Name*</label>
                                <input type="Lastname" name='Lastname' onChange={handleonchange} placeholder='Enter a LastName' className='px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-sm mb-1 font-medium'>Email Address</label>

                            <input type="text" name='email' onChange={handleonchange} placeholder="Enter your Email" className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Phone Number *" className='text-sm mb-1 font-medium'>Phone Number *</label>

                            <input type="text" name='Phone' onChange={handleonchange} placeholder="530 (123 4567) " className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Company Name" className='text-sm mb-1 font-medium'>Company Name</label>

                            <input type="text" name='companyname' onChange={handleonchange} placeholder="Your Company Name " className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Password *" className='text-sm mb-1 font-medium'>Password *</label>

                            <input type="text" name='password' onChange={handleonchange} placeholder="Create Your Password " className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                        </div>

                        <button type='submit' className='w-full mt-4 flex cursor-pointer items-center  justify-center gap-2 bg-[#1E40Af] text-white py-2 rounded-md hover:bg-blue-800 transition disabled:bg-gray-400 '>Create Account </button>
                    </form>

                    <h2 className='text-center'>Already have an account? <NavLink to="/Signup" className="text-blue-600">  Sign in here </NavLink></h2>
                    <p className='text-center text-sm text-gray-400'>By creating an account, you agree to our terms of service and privacy policy.</p>
                </div>
            </div>
            <div className='w-130 bg-red-100 h-230 mt-25 rounded-md'>
                <img src="./Login1.png" alt="" className='h-full w-full object-cover' />

            </div>



        </div>
    )
}

export default Register