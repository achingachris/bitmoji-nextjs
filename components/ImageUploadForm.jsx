import axios from "axios";
import { useState, useEffect } from 'react'

const baseURL = 'https://public-api.mirror-ai.net/v2/generate'

const ImageUploadForm = () => {
  // upload image to API
  const [image, setImage] = useState(null)

  const handleImageUpload = async (e) => {
    // get file from event
    const setImage = e.target.files[0]

    console.log(setImage);
    // send image to API
    const sendImage = await fetch('https://public-api.mirror-ai.net/v2/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Mirror-AI-Token': 'f63272366f3b4d56915b620101a7a2e7',
      },
      body: JSON.stringify(setImage)
    })
  }

  const submitImage = async () => {
  
    const result = await fetch('https://public-api.mirror-ai.net/v2/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: myData
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
