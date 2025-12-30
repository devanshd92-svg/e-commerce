import React from 'react'
import Certification from '../Component/Home/Certification.jsx'
import Hero from '../Component/Home/Hero.jsx'
import MandatoryTraning from '../Component/Home/MandatoryTraning.jsx'
import WhyChoose from '../Component/Home/WhyChoose.jsx'
import { center, mandatory } from '../data.js'
import Traninig from '../Component/Home/Traninig.jsx'
import Complicetraning from '../Component/Home/Complicetraning.jsx'
import CompliceSpeak from '../Component/Home/CompliceSpeak.jsx'
import Contact from '../Component/Home/Contact.jsx'

const Home = () => {
  return (
    <div className='-mt-20'>
     
     <Hero  image={center.image} h1={center.h1} p={center.p} btn={center.btn}/>
     <MandatoryTraning li1={mandatory.li1} li2={mandatory.li2} li3={mandatory.li3} li4={mandatory.li4} />
     <Certification/>
     <WhyChoose/>
     <Traninig/>
     <Complicetraning/>
     <CompliceSpeak/>
     <Contact/>
    </div>
  )
}

export default Home
