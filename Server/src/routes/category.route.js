const express = require('express'),
  router = express.Router();
// Require controller modules.
const category_Controller = require('../controllers/category.controller');
//
router.route('/create').post(category_Controller.createCategory);
router.route('/getcategories').get(category_Controller.getCategories);
router.route('/preview').get(category_Controller.getPreviewData);
//
module.exports = router;
