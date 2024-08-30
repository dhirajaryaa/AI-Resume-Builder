import React from 'react'
import { resumeData } from '@/data/dummyResume'
import { PersonalDetails, Summary } from './components'
const ResumePreview = () => {
  return (
    <section className={`shadow-lg h-full p-14 border-t-8 border-[${resumeData.themeColor}]`} >
     {/* personalDetails  */}
      <PersonalDetails  resumeData={resumeData}/>

     {/* summary */}
    <Summary summary={resumeData.summary}/>
     {/* education */}

     {/* workExperience */}

     {/* skills */}


    </section>
  )
}

export default ResumePreview