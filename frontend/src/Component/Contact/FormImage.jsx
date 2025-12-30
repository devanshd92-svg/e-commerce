import React from 'react'
import { fromimagedata } from '../../data'

const FormImage = () => {
  return (
    <div>

        <div className=' w-170 h-160 px-2 pb-2 flex flex-col justify-between '>

          <img src="/ContactForm.png" alt="" className='w-full rounded-md object-cover  shadow-[0_3px_10px_rgb(0,0,0,0.2)]' />

           <div className='h-44 w-full  rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white flex flex-col items-start p-2  ' >
            {fromimagedata.map((item, index)=> (
                      <div className=' flex flex-col gap-4'>
                        <h1 className='text-xl font-sans font-bold'>{item.h1}</h1>
                        <p>{item.p}</p>
                        <div className='flex  items-center w-full text-blue-500 gap-1 text-lg'>
                          <item.icon className='scale-100'/>
                        <p>{item.phone}</p>
                        </div>
                        <p className='text-gray-400'>{item.p1}</p>


                      </div>
            
             

             
            ))}



           </div>


        </div>
      
    </div>
  )
}

export default FormImage
