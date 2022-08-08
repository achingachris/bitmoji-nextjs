import axios from 'axios'
import { useState, useEffect } from 'react'

const baseURL = 'https://public-api.mirror-ai.net/v2/generate'

const ImageUploadForm = () => {
  // upload image to API
  const [image, setImage] = useState(null)

  const handleImageUpload = (e) => {
    // get file from event
    setImage(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(setImage)
    const formData = new FormData()
    formData.append('image', setImage)

    // send image to API
    fetch('/api/mirror', {
      method: 'POST',

      body: formData,
    })
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err))
  }

  // const submitImage = async () => {
  //   const result = await fetch('https://public-api.mirror-ai.net/v2/generate', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: myData,
  //   })

  //   const resultInJson = await result.json()
  //   setAuthors((prev) => [...prev, resultInJson])
  // }

  return (
    <div>
      <form className='form form-control' onSubmit={handleSubmit}>
        <div className='m-4'>
          <label htmlFor='formFileLg' className='form-label'>
            Upload Your Photo
          </label>
          <input
            className='form-control form-control-lg'
            type='file'
            onChange={handleImageUpload}
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ImageUploadForm
