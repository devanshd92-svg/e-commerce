import React from 'react'
import Imageinsight from '../Component/insight/Imageinsight.jsx'
import { featured, imageinsight } from '../data.js'
import Featured from '../Component/insight/Featured.jsx'
import LookingUpdates from '../Component/insight/LookingUpdates.jsx'


const Insight = () => {
  return (
    <div>
      <Imageinsight   h1={imageinsight.h1} p={imageinsight.p}/>
      <Featured h1={featured.h1} p={featured.p} btn1={featured.btn1} btn2={featured.btn2} li1={featured.li1} li2={featured.li2} li3={featured.li3} />
      <LookingUpdates/>
    </div>
  )
}

export default Insight
