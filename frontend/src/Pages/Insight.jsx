import React from 'react'
import Imageinsight from '../Component/insight/imageinsight'
import { featured, imageinsight } from '../data'
import Featured from '../Component/insight/Featured'
import LookingUpdates from '../Component/insight/LookingUpdates'


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
