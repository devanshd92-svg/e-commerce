import React from 'react'
import { card } from '../../data'
import { Bs0Circle } from 'react-icons/bs'


const WhyChoose = () => {
  return (
    <div>
      <div className='bg-gray-200 md:py-24'>
        <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{ backgroundImage: " url('public/banner1.jpg')", backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex pt-5 justify-center flex-col'>
            <div className='text-center text-white px-4'>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Why Choose DOT Council?</h1>
              <p className='text-lg md:text-xl mb-6'>We provide comprehensive, up-to-date DOT training that keeps your business compliant and your team confident.</p>
              {/* <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button> */}


            </div>
            <div className="flex text-black p-5 gap-5">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white text-black p-4 rounded shadow items-center flex flex-col h-50 gap-5 
                 transfrom transition-transform duration-500 ease-in-out scale-90 hover:scale-100"
                >
                  <item.cards.icon className="text-4xl text-black scale-100 group-hover:scale-150 transition ease-in-out" />

                  <h2 className="font-bold text-xl">{item.cards.h2}</h2>


                  <p className="opacity-0 h-0 overflow-hidden transition-all duration-500 
                    group-hover:opacity-100 group-hover:h-auto ease-in-out ">
                    {item.cards.p}
                  </p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default WhyChoose
