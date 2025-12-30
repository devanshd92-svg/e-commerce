import React from 'react'
import { compliance } from '../../data'

const Complicetraning = () => {
  return (
    <div>
        
                    <div className=' h-150 bg-white w-full flex pt-10 justify-center text-center gap-50 '>
                        {compliance.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-4xl font-bold">{item.title}</h1>
                                <p className="text-2xl">{item.discription}</p>
                                   
                                   <div className='flex  gap-25 '>
                                {item.cards.map((bajwa, i) => (
                                    <div key={i} className=" p-2 h-80 w-100 mt-20 bg-blue-100   hover:border-2 rounded-md  transfrom transition-transform duration-300 scale-90 hover:scale-100 gap-3">
                                        <h2 className=" text-xl p-5 font-sans">{bajwa.h2}</h2>
                                        <p className='text-4 px-2 font-sans text-gray-600'>{bajwa.p}</p>
        
                                        <button className='mt-8 p-1 text-white rounded-md bg-blue-500'>{bajwa.btn}</button>
        
                                        
                                        
                                        
                                    </div>
                                ))}
                                </div>
                            </div>
                        ))}
         
        
        
        
                    </div>
      
    </div>
  )
}

export default Complicetraning
