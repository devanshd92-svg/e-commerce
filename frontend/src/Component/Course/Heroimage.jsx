import React, { useContext, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdSearch } from 'react-icons/md';
import { BiBookmarks } from "react-icons/bi";
import { CartContext } from '../Contextapi/CartProvider';
import { SearchContext } from '../Contextapi/SearchProvider';

const Heroimage = (props) => {

     const {cart} = useContext(CartContext)
    // const [form, setform] = useState({ Search: "", name:" ", email:""  })
    const {searchtext ,setsearchtext} =useContext(SearchContext)
    

    var settings = {
        dots: false,
        infinite: true, 
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };





    const handleonchange = (event) => {
        // setform((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        setsearchtext(event.target.value)

    }


    const handleonSubmit = (event) => {
        event.preventDefault()
        // console.log(form)
        console.log(searchtext)

    }
       

    
   



    return (
        <div>
            <div className='w-full h-230 flex flex-col gap-5 items-center justify-center overflow-hidden bg-amber-50 '>



                {/* <div className="w-full h-230 bg-center bg-size-cover bg-no-repeat backdrop-blur-md bg-cover relative " style={{ backgroundImage: `url(${props.image.src})` }}>
                </div> */}

                <div className="w-full h-230 relative ">
                    <Slider {...settings}>
                        <div><img src="/Homehero1.png" className="w-full h-230" /></div>
                        <div><img src="/Homehero2.png" className="w-full h-230" /></div>
                        <div><img src="/Homehero3.png" className="w-full h-230" /></div>
                    </Slider>
                </div>





                <h1 className=' text-blue-400 text-[50px] absolute bottom-[400px] italicshadow-[5px_5px_5px_black]'>{props.h1}</h1>
                <p className=' text-[aliceblue] text-[25px] absolute bottom-[300px]  font-sans italic shadow-[5px_5px_5px_black] max-w-200'>{props.p}</p>


                <form action="" onSubmit={handleonSubmit} className='absolute' >
                    <div className='flex items-center bg-white font-sans w-180 h-10 mt-35 gap-2 rounded-md px-2'>

                        <MdSearch className='text-black size-5  ' />
                        <input type="text" name='Search' onChange={handleonchange} placeholder='Enter a Name' value={searchtext} className='bg-white w-120  focus:outline-none' />

                        <div className=' w-px h-8 bg-gray-200 mx-2'></div>

                        <div className='flex items-center'>
                            <BiBookmarks />
                            <select class="bg-white text-black px-4 focus:outline-none py-2 rounded cursor-pointer">
                                <option>All</option>
                                <option>Free</option>
                                <option>Paid</option>
                            </select>

                        </div>

                    </div>


                </form>







            </div>


        </div>
    )
}

export default Heroimage