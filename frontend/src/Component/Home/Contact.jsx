import React from 'react'
import { contactteam } from '../../data'
import { BiArrowBack, BiArrowToLeft } from 'react-icons/bi'
import { FaArrowRight } from "react-icons/fa";

import { useNavigate } from 'react-router-dom'


const Contact = () => {
    const navigate = useNavigate()
    return (
        <div>

            <div className=' h-80 bg-[#1E40AF] w-full flex  justify-center text-white font-sans gap-15 '>
                {contactteam.map((item, index) => (
                    <div key={index} className='flex gap-6 flex-col'>
                        <h1 className="text-4xl font-bold text-center ">{item.title}</h1>
                        <p className="text-2xl text-center">{item.discription}</p>

                        <div className='flex  justify-center gap-5 mt-10 '>
                            {item.cards.map((bajwa, i) => (
                                <div key={i} className="  flex text-center  ">
                                    <button onClick={() => {
                                        if (bajwa.btn === "Contact Us") {
                                            navigate("/Contact")
                                        }
                                    }} className='px-10 py-3  text-white rounded-md bg-blue-500 text-2xl transfrom transition-transform duration-300 scale-90 hover:scale-100 cursor-pointer'>

                                        {bajwa.btn}</button>
                                    {/* <button  className='px-15 py-5  text-black rounded-md bg-white'>{bajwa.btn1}</button> */}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}




            </div>


        </div>
    )
}

export default Contact


