import React from 'react'
import Imagecontact from '../Component/Contact/Imagecontact'
import { courseimage } from '../data'
import Contactaddress from '../Component/Contact/Contactaddress'
import Formhandle from '../Component/Contact/Formhandle'

const Contact = () => {
  return (
    <div>
      <Imagecontact  h1={courseimage.h1} p={courseimage.p}/>
      <Contactaddress/>
      <Formhandle/>
    </div>
  )
}

export default Contact
