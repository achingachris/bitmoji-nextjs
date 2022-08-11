import multer from 'multer'
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

export const config = {
  api: {
    bodyParser: false,
  },
}

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => cb(null, file.originalname),
})

const upload = multer({
  storage,
})

export default function mirror(req, res) {
  upload.single('file')(req, {}, async (err) => {
    const filePath = `./public/uploads/${req.file.originalname}`
    const form = new FormData()
    form.append(
      'photo',
      fs.readFileSync(filePath),
      `${req.file.filename};type=${req.file.mimetype}`
    )

    const response = await axios.post(
      'https://public-api.mirror-ai.net/v2/generate',
      form,
      {
        params: {
          style: 'kenga',
        },
        headers: {
          ...form.getHeaders(),
          accept: 'application/json',
          'X-Token': 'f63272366f3b4d56915b620101a7a2e7',
          'Content-Type': 'multipart/form-data',
        },
      }
    )

    if (response.data.ok) {
      res.status(200).json({ msg: response.data })
    } else {
      res.status(500).json({ msg: 'error' })
    }
  })
}
