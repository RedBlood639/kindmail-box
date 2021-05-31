const express = require('express'),
  router = express.Router();

const nodetype = require('../controllers/nodetype.controller');
//
router.route('/getlistitems').get(nodetype.getlistItems);
router.route('/getlistitem').get(nodetype.getlistitem);
router.route('/nodetype/create').post(nodetype.createType);

//
module.exports = router;
