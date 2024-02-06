const express = require('express')

const {registerDocument,upload} = require('../Controller/documentCntroller')

const router   = express.Router()

router.post("/teacher/documents", upload.single("file"), registerDocument)


module.exports = router