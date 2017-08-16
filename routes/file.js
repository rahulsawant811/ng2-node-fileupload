const express = require('express');
const multer = require('multer');
var router = express.Router();

var storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  // renombrar fichero
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post("/upload", upload.array("uploads[]", 12), function (req, res) {
  console.log('files', req.files);
  res.send(req.files);
});

module.exports = router;
