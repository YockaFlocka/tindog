const router = require("express").Router();
const User = require("../../models/User");


// router.get("/", (req, res) => {
//   User.findAll()
//     .then( resp => res.status(200).json({ status: "success", payload: resp }))
//     .catch( err => res.status(200).json({ msg: err.message }))
// })


// router.get("/:id", (req, res) => {
//   User.findByPk(req.params.id)
//     .then( resp => res.json({ status: "success", payload: resp }))
//     .catch( err => res.json({ msg: err.message }))
// })


router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.validatePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.put("/:id", (req, res) => {
//   User.update(
//     req.body,
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then( resp => res.status(200).json({ status: "success", payload: resp }))
//     .catch( err => res.status(200).json({ msg: err.message }))
// })

// router.delete("/:id", (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then( resp => res.status(200).json({ status: "success", payload: resp }))
//   .catch( err => res.status(200).json({ msg: err.message }))
// })


// Here's a route you can use for authenticating a login
// router.post("/login", async (req, res) => {
//   const foundUser = await User.findOne({
//     where: {
//       email: req.body.email
//     }
//   })
//   if( !foundUser ) return res.status(401).json({ status: "error", msg: "No user found" })
//   if( !foundUser.validatePassword(req.body.password) ) return res.status(401).json({ status: "error", msg: "No user found" })
//   return res.status(200).json({ status: "success", payload: foundUser })
// })

module.exports = router
