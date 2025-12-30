import React from 'react'
import { compspeack } from '../../data'

const CompliceSpeak = () => {
    return (
        <div>
            <div className=' h-180 bg-white w-full flex pt-10 justify-center  gap-5 '>
                {compspeack.map((item, index) => (
                    <div key={index}>
                        <h1 className="text-4xl font-bold text-center">{item.title}</h1>
                        <p className="text-2xl text-center">{item.discription}</p>

                        <div className='grid grid-flow-col grid-rows-2 p-1 '>
                            {item.cards.map((bajwa, i) => (
                                <div key={i} className="  relative mt-20 flex gap-10 items-center  ">

                                    <img className=' -mr-15 size-20 absolute z-15  ' src={bajwa.image.src} alt="" />

                                    <div className='pl-15 ml-5  pt-5 flex gap-3 items-start flex-col bg-gray-200 w-140 h-40  rounded-r-full  scale-90'>
                                        <h2 className=" text-md font-sans">{bajwa.h2}</h2>
                                        <p className='text-sm max-w-110 font-sans text-gray-600'>{bajwa.p}</p>

                                        <p className=' max-w-50 text-white rounded-md bg-blue-500'>{bajwa.btn}</p>

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

export default CompliceSpeak
