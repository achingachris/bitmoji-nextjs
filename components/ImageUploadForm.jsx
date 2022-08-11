import Image from 'next/image';
import { useState } from 'react';

const ImageUploadForm = () => {
  // upload image to API
  const [image, setImage] = useState(null);
  const [imgResult, setImgResult] = useState(null);

  const handleImageUpload = (e) => {
    // get file from event
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', image);
    fetch('/api/mirror', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => setImgResult(res.msg.face.url))
      .catch((err) => console.log(err));
  };

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
            required
            onChange={handleImageUpload}
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
      {imgResult && (
        <img alt='bitmoji' width={500} height='500' src={imgResult} />
      )}
    </div>
  );
};

export default ImageUploadForm;
