import React from 'react'

const Featured = (props) => {
    return (
        <div>

            <div className='bg-white h-85  w-full  flex justify-center items-center '>

                <div className=' rounded-md  bg-white shadow-md h-70 flex  w-170 flex-col px-5 gap-6'>
                    <div className='flex justify-between mt-5 '>
                        <button className='bg-blue-500 px-5 py-1 text-white rounded-md'>{props.btn1}</button>
                        <button className='bg-red-400 px-5 py-1 text-white rounded-md '>{props.btn2}</button>
                    </div>


                    <div className='  flex flex-col justify-center  gap-3'>
                        <h1 className='text-xl font-sans'>{props.h1}</h1>
                        <p className='max-w-155 text-md text-gray-500 '>{props.p}</p>

                    </div>
                    <div className='flex text-gray-400 text-md  justify-around'>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default Featured
