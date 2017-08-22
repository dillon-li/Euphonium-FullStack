var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getMemes', function(req, res, next) {
  res.json([{
    string: "It worked"
  }]);
});

module.exports = router;
