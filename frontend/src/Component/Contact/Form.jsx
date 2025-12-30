import React from 'react'
import { useState } from 'react'
import { MdMessage } from 'react-icons/md'

const Form = () => {
    const [form, setform] = useState({ name: "", email: "", company: "",phone:"",subject:"",message:"" })



    const handleonchange = (event) => {
        setform((prev) => ({ ...prev, [event.target.name]: event.target.value }))

    }


    const handleonSubmit = (event) => {
        event.preventDefault()
        console.log(form)

    }
    return (
        <div>




            <div className=' h-160 w-170 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white'>
                <form action="" onSubmit={handleonSubmit} className='flex flex-col px-9' >
                    <h1 className='text-2xl font-bold mb-2 pt-4'>Send Us a Message</h1>
                    <h2 className='text-gray-500'>Fill out the form below and we'll get back to you as soon as possible.</h2>
                    <div className='flex justify-center flex-col gap-6 pt-10'>

                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor="name" className='text-sm mb-1 font-medium'>Full Name*</label>

                                <input type="text" name='name' onChange={handleonchange} placeholder='Enter a Name' className='px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='text-sm mb-1 font-medium'>Enter email*</label>
                                <input type="email" name='email' onChange={handleonchange} placeholder='Enter a Email' className='px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor="company" className='text-sm mb-1 font-medium'>Company Name*</label>

                                <input type="text" name='company' onChange={handleonchange} placeholder='Your Company' className='px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="phone" className='text-sm mb-1 font-medium'>Phone Number*</label>
                                <input type="text" name='phone' onChange={handleonchange} placeholder='(556) 123-4567' className='px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                             <label htmlFor="subject" className='text-sm mb-1 font-medium'>Subject*</label>

                                <input type="text" name='subject' onChange={handleonchange} placeholder="What's this About" className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="message" className='text-sm mb-1 font-medium'>Message*</label>
                            <textarea rows={4} name="message" id="" placeholder='Tell us about your traning needs or compliance questions...' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' onChange={handleonchange}  required></textarea>

                        </div>
                       

                        <button type='submit' className='w-full flex cursor-pointer items-center  justify-center gap-2 bg-[#1E40Af] text-white py-2 rounded-md hover:bg-blue-800 transition disabled:bg-gray-400 '>Send Message <MdMessage/></button>
                    </div>
                </form>
            </div>




        </div>
    )
}

export default Form

