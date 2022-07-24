import { useState, useEffect } from 'react'

const ImageUploadForm = () => {
  // upload image to API
  const [image, setImage] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    console.log(file)
    setImage(file)
  }

  const submitImage = async () => {
    const newImage = {
      
    }

    const result = await fetch('https://public-api.mirror-ai.net/v2/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData)
    })

    const resultInJson = await result.json()
    setAuthors(prev => [...prev, resultInJson])
  }

  return (
    <div>
      <form className='form form-control'>
        <div className='m-4'>
          <label htmlFor='formFileLg' className='form-label'>
            Upload Your Photo
          </label>
          <input
            className='form-control form-control-lg'
            type='file'
            onChange={handleImageUpload}
          />
        </div>
      </form>
    </div>
  )
}

export default ImageUploadForm
