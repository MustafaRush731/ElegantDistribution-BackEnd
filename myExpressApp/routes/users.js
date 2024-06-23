var express = require('express');
const db = require('../database');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/', (req,res) => {
//   const { username, password } = req.body;
//   if (username && password) {

//   }
// });


module.exports = router;
