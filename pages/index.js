import React from 'react'
import ImageUploadForm from './ImageUploadForm'

const index = () => {

  return (
    <div className='container m-auto'>
      {/* page header */}
      <div className='container'>
        <h1 className='text-center'>Custom Bitmoji</h1>
      </div>

      {/* form */}
     <ImageUploadForm />
    </div>
  )
}

export default index
