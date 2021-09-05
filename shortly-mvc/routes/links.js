const express = require('express');
const router = express.Router();
const controller = require('../controllers/links/index');

/* GET links listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// get
router.get('/', controller.get)
// getId
router.get('/:id', controller.getId)
// post
router.post('/', controller.post)

module.exports = router;
