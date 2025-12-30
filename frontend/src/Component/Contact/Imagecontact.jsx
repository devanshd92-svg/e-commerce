import React from 'react'

const Imagecontact = (props) => {

 
    return (
        <div>
            <div className='w-full h-230 flex flex-col gap-5 items-center justify-center overflow-hidden bg-amber-50 '>



                {/* <div className="w-full h-230 bg-center bg-size-cover bg-no-repeat backdrop-blur-md bg-cover relative " style={{ backgroundImage: `url(${props.image.src})` }}>
                </div> */}

                <div className="w-full h-230 relative">
                    
                        <div><img src="/Homehero1.png" className="w-full h-230" /></div>
                       
                    
                </div>




                    <div className='absolute flex flex-col  gap-15 items-start w-full  pl-20'>
                       <h1 className=' text-[aliceblue] text-7xl  italicshadow-[5px_5px_5px_black]'>{props.h1}</h1>
                <p className=' text-[aliceblue] text-2xl font-sans italic shadow-[5px_5px_5px_black] max-w-170'>{props.p}</p>


                    </div>
                
               
            </div>

        </div>
    )
}

export default Imagecontact
