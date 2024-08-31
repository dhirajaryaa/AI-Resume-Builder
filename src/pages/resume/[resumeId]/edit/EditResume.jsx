import { ResumeForm, ResumePreview } from '@/components'
import React from 'react'

const EditResume = () => {
  return (
    <main className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8'>
      {/* Resume Form section  */}
      <ResumeForm />

      {/* Resume Preview section  */}
      <ResumePreview />
    </main>
  )
}

export default EditResume