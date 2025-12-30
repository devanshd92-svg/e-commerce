import React from 'react'
import { contactaddress } from '../../data'

const Contactaddress = () => {
  return (
    <div>

         <div className=' h-100 bg-white w-full flex pt-10 justify-center  gap-15 '>
                        {contactaddress.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-5xl font-bold text-center text-blue-500 ">{item.title}</h1>
                                
        
                                <div className='  gap-15 pt-15 grid md:grid-cols-4 '>
                                    {item.cards.map((bajwa, i) => (
                                        <div key={i} className="flex items-center  ">
        
                                           
        
                                            <div className='flex flex-col gap-4  w-75 h-45   justify-center items-center  border border-white hover:border-blue-600  rounded-md   transfrom transition-transform duration-300  shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                                                <bajwa.icon  className=' text-black scale-200'/>
                                                <h2 className=" text-md font-sans">{bajwa.li1}</h2>
                                                <p className='text-sm max-w-110 font-sans text-gray-600'>{bajwa.li2}</p>
        
                                                <p className=' '>{bajwa.li3}</p>
        
                                            </div>
        
        
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
        
        
        
        
                    </div>
      
    </div>
  )
}

export default Contactaddress
