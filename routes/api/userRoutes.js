const router = require("express").Router();
const User = require("../../models/User");


router.get("/", (req, res) => {
  User.findAll()
    .then( resp => res.status(200).json({ status: "success", payload: resp }))
    .catch( err => res.status(200).json({ msg: err.message }))
})


// router.get("/:id", (req, res) => {
//   User.findByPk(req.params.id)
//     .then( resp => res.json({ status: "success", payload: resp }))
//     .catch( err => res.json({ msg: err.message }))
// })

const bigLog = (...text) => console.log(`\n==${text.join(" ")}\n`)



router.post('/', async (req, res) => {
  bigLog("signup route hit and running")

  console.log(req)
  
  try {
    const dbUserData = await User.create(req.body);
    console.log("We are getting dbUserData: ", dbUserData)
      
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/login', async (req, res) => {
  console.log("Login route hit and running")
  console.log("req.body: ", req.body)

  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    bigLog("userData: " +  userData)
    
    if (!userData) {
      res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    
    const validPassword = await userData.validatePassword(req.body.password);
    bigLog("validPassword: " +  validPassword)

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
  console.log(req.session)
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
