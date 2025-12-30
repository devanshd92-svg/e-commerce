import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdSearch } from 'react-icons/md';
import { BiBookmarks } from "react-icons/bi";

const Imageinsight = (props) => {

    const [form, setform] = useState({ Search: "",  })

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };





   



    return (
        <div>
            <div className='w-full h-230 flex flex-col gap-5 items-start justify-center overflow-hidden bg-amber-50 '>



                {/* <div className="w-full h-230 bg-center bg-size-cover bg-no-repeat backdrop-blur-md bg-cover relative " style={{ backgroundImage: `url(${props.image.src})` }}>
                </div> */}

                <div className="w-full h-230 relative ">
                    <Slider {...settings}>
                        <div><img src="/Homehero1.png" className="w-full h-230" /></div>
                        <div><img src="/Homehero2.png" className="w-full h-230" /></div>
                        <div><img src="/Homehero3.png" className="w-full h-230" /></div>
                    </Slider>
                </div>





                <h1 className=' text-blue-400 text-[75px] absolute bottom-[300px] italicshadow-[5px_5px_5px_black] pl-15'>{props.h1}</h1>
                <p className=' text-[aliceblue] text-[25px] absolute bottom-[150px]  font-sans italic shadow-[5px_5px_5px_black] max-w-200 pl-15'>{props.p}</p>


                







            </div>


        </div>
    )
}

export default Imageinsight