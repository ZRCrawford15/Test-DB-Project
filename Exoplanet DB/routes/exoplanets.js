const express = require('express');
const router = express.Router();
const programmingLanguages = require('../exoplanets');

/* GET programming languages. */
router.get('/', function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;
