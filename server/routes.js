const router = require('express').Router();

router.get('/foo', (req, res) => {
  return res.send('hello world!');
});

module.exports = router;
