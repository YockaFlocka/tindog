const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('all')
})

router.get('/matches', (req, res) => {
  res.render('matches')
})

router.get('/favorites', (req, res) => {
  res.render('favorites')
})

router.get('/users', (req, res) => {
  res.render('users')
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('login');
});

module.exports = router;