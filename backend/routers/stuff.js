const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../images/multer-config');

const stuffCtrl = require('../controllers/stuff');


router.post('/',auth, multer, stuffCtrl.createThing );
  router.get('/:id',auth, stuffCtrl.getOneThing) ;
  router.put('/:id',auth,multer, stuffCtrl.updateOneThing);
  router.delete('/:id', stuffCtrl.deleteOneThing);
  router.get('/',auth, stuffCtrl.getAllThings );
module.exports=router;