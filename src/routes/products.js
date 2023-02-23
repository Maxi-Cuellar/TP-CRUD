// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** MULTER ***/ 
const {uploadOneImage} = require("../middlewares/upload")


/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', uploadOneImage.single("image") , productsController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', uploadOneImage.single("image"), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
