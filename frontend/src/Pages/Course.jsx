import React from 'react'
import Heroimage from '../Component/Course/Heroimage'
import { Heroimagesection } from '../data'
import Contact from '../Component/Home/Contact'
import Complicetraning from '../Component/Home/Complicetraning'
import CompliceSpeak from '../Component/Home/CompliceSpeak'
import Traninig from '../Component/Home/Traninig'

const Course = () => {
  return (
    <div>
      <Heroimage h1={Heroimagesection.h1} p={Heroimagesection.p} />
      <Traninig/>
      
      
      <Contact/>
    </div>
  )
}

export default Course
