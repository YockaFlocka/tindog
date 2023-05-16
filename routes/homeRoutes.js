const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('all', {logged_in: req.session.logged_in})
})

router.get('/matches', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('matches', {logged_in: req.session.logged_in, user_id: req.session.user_id})
})

// router.get('/favorites', (req, res) => {
//   res.render('favorites', {logged_in: req.session.logged_in})
// })

router.get('/users', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('users', {logged_in: req.session.logged_in})
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;