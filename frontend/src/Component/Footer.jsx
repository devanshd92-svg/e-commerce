import React, { useState } from 'react'

import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";

import { SiHandshakeProtocol } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { PiPhone } from 'react-icons/pi';
import { MdMessage } from 'react-icons/md';
import { CiLocationArrow1 } from 'react-icons/ci';



export const Footer = (props) => {
    const [active, setactive] = useState("Home")
    return (
        <>
            <div className="flex bg-[#050f2c] text-white justify-center h-65 gap-65 p-10">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        {/* <SiHandshakeProtocol className='bg-blue-300 scale-300' /> */}

                     
                            <img className='w-25 h-20 text-white ' src="public/logofooter (1).svg" alt="" />

                       


                        <h1 className='text-4xl' >{props.h1}</h1>
                    </div>
                    <h4 className='max-w-100'>
                        {props.h2}

                    </h4>
                    <div className=" flex gap-5" >
                        <FaInstagram className='scale-150 hover:scale-170' />
                        <FaFacebook className='scale-150 hover:scale-170' />
                        <FaYoutube className='scale-150 hover:scale-170' />
                        <FaSquareXTwitter className='scale-150 hover:scale-170' />
                        <FaSnapchat className='scale-150 hover:scale-170' />

                    </div>
                </div>

                <div className="text-center flex flex-col gap-5">
                    <h1 className='text-2xl'>{props.h22}</h1>
                    <li>{props.h23}</li>
                    <li>{props.h24}</li>
                    <li>{props.h25}</li>

                </div>





                <div className='flex flex-col gap-5'>
                    <h4 className='text-2xl' >{props.p1}</h4>
                    <li className='flex  items-center gap-2'><PiPhone className='size-5'/> {props.p2}</li>
                    <li className='flex items-center gap-2'><MdMessage/>{props.p3}</li>
                    <li className='flex items-center gap-2'><CiLocationArrow1/>{props.p4}</li>
                </div>
            </div>
            <hr />
            <h4 className='text-center'>{props.title1}</h4>


        </>
    )
}
