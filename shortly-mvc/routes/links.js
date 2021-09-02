const express = require('express');
const router = express.Router();
const controller = require('../controllers/links/index')

/* GET links listing. */
// router.get('/', function (req, res, next) {
//   res.send('??');
// });

// https://expressjs.com/ko/starter/basic-routing.html

// get
router.get('/', controller.get)

// getId
// 화면에 나옴
router.get('/:id', controller.getId)

// post
router.post('/', controller.post)


module.exports = router;
