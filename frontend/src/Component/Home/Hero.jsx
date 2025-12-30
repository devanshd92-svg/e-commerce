import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = (props) => {

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
            <div className=' md:w-full h-230 flex flex-col gap-5 items-center justify-center overflow-hidden bg-amber-50 '>



                {/* <div className="w-full h-230 bg-center bg-size-cover bg-no-repeat backdrop-blur-md bg-cover relative " style={{ backgroundImage: `url(${props.image.src})` }}>
                </div> */}

                <div className="w-full h-230 relative">
                    <Slider {...settings}>
                        <div><img src="/Homehero1.png" className="w-full h-230" /></div>
                        <div><img src="/Homehero2.png" className="w-full h-230" /></div>
                        <div><img src="/Homehero3.png" className="w-full h-230" /></div>
                    </Slider>
                </div>





                <h1 className=' text-[aliceblue] text-[50px] absolute bottom-[400px] italicshadow-[5px_5px_5px_black]'>{props.h1}</h1>
                <p className=' text-[aliceblue] text-[15px] absolute bottom-[200px] font-sans italic shadow-[5px_5px_5px_black] max-w-100'>{props.p}</p>
                <button className='bg-[linear-gradient(80deg,#8cc5e4,#138dcf)] p-5 absolute bottom-[30px] rounded-[5px] text-[aliceblue] text-[20px] font-light
                 shadow-[5px_5px_5px_rgb(24,23,23)] hover:bg-blue-700 transition-colors '>{props.btn}</button>
            </div>

        </div>
    )
}

export default Hero
