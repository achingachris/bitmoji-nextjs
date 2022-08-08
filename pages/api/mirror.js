import multer from 'multer'

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
  upload.single('file')(req, {}, (err) => {
    const filePath = `./public/uploads/${req.file.originalname}`
    fetch('https://public-api.mirror-ai.net/v2/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Mirror-AI-Token': 'f63272366f3b4d56915b620101a7a2e7',
      },
      body: filePath,
    })
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err))
  })
}

