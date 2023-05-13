const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('all')
})

router.get('/matches', (req, res) => {
  res.render('matches')
})

router.get('/users', (req, res) => {
  res.render('users')
})

module.exports = router;