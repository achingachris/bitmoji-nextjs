import React from 'react'
import Image from 'next/image'
import ImageUploadForm from '../components/ImageUploadForm'

const index = () => {
  return (
    <div className='container m-auto'>
      {/* page header */}
      <div className='container'>
        <h1 className='text-center'>Custom Bitmoji</h1>
      </div>

      {/* form */}
      <ImageUploadForm />

      <div className='container mt-4'>
        <div className='row'>
          <div className='col-xl-6 col-md-6 mb-6'>
            <div className='card border-0 shadow'>
              <Image
                src='/image1.jpeg'
                className='card-img-top'
                width='500'
                height='350'
                alt='...'
              />
              <div className='card-body text-center'>
                <h5 className='card-title mb-0'>User Image</h5>
                <div className='card-text text-black-50'>Web Developer</div>
              </div>
            </div>
          </div>
          <div className='col-xl-6 col-md-6 mb-6'>
            <div className='card border-0 shadow'>
              <Image
                src='/image2.png'
                className='card-img-top'
                width='500'
                height='350'
                alt='...'
              />
              <div className='card-body text-center'>
                <h5 className='card-title mb-0'>Bitmoji</h5>
                <div className='card-text text-black-50'>Web Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
