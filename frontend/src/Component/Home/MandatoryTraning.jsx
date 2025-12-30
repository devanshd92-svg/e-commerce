import React from 'react'

const MandatoryTraning = (props) => {
  return (
    <div>

        <div className='flex text-white  w-350 justify-center h-45 rounded-full bg-blue-100 absolute top-190  mx-15 '>

        <ul className='flex text-black font-serif gap-30 items-center text-4xl '>
          <li >{props.li1}
           <p className='text-sm'> Professionals Trained  </p> 
          </li>
          <li >{props.li2}
         <p className='text-sm'>Expert Courses</p>
          </li>
          <li >{props.li3}
            <p className='text-sm'> Certification rate </p>
          </li>
          <li >{props.li4}
           <p className='text-sm'>   Learning Support</p>
          </li>
        </ul>
        </div>

        
      
    </div>
  )
}

export default MandatoryTraning
