const { Router } = require('express');
const { productsGet, productsPost, productsDelete, productsPut }  = require('../controllers/product.controllers');
 
 const router = Router();

router.get('/products', productsGet);
router.post('/products', productsPost);
router.put('/products', productsPut);
router.delete('/products', productsDelete);


module.exports = router;