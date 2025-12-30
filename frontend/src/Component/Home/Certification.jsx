import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certification = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='w-full h-100  bg-white'>
      
     
      <div className='flex justify-center mb-5 '>
        <h1 className='text-black font-sans text-[35px] pt-45'>
          We Provide Certifications for Trainings Mandated by
        </h1>
      </div>

      {/* Slider Section */}
      <div className='flex justify-center'>
        <div className='w-[400px] md:w-[500px]'>
          <Slider {...settings}>
            <div><img src="/carousel1.png" className='w-50 h-auto' /></div>
            <div><img src="/carousel2.png" className='w-50 h-auto' /></div>
            <div><img src="/carousel6.png" className='w-50 h-auto' /></div>
            <div><img src="/carousel4.png" className='w-50 h-auto' /></div>
          </Slider>
        </div>
      </div>

    </div>
  )
}

export default Certification
