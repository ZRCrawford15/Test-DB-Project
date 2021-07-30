const express = require('express');
const router = express.Router();
const exoplanets = require('../exoplanets');

/* GET programming languages. */
router.get('/', function(req, res, next) {
  try {
    res.json(await exoplanets.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting exoplanets `, err.message);
    next(err);
  }
});

module.exports = router;
