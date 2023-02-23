const multer = require("multer");
const path = require("path");

/*** MULTER STORAGE Y MULTER ***/ 
const storageOneImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, "public/images/products")
    },
    filename: (req, file, cb) => {
        const nexFilename = Date.now() + "-products-" + path.extname(file.originalname);
        cb (null, nexFilename)
    }
})

const uploadOneImage = multer({
    storage : storageOneImage
})

module.exports = {uploadOneImage}