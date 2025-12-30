import React from 'react'
import { useState } from 'react'
import Form from './Form'
import FormImage from './FormImage'

const Formhandle = () => {

   
  return (
    <div>
        <div className='h-180  flex justify-center gap-8 p-8'>
        <Form/>
        <FormImage />
      </div>
    </div>
  )
}

export default Formhandle
