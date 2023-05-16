const router = require("express").Router();
const Favorite = require("../../models/Favorite");


router.get("/", (req, res) => {
  Favorite.findAll({ where: { user_id: req.session.user_id || 0 } })
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

// TODO: This needs a check that the reference_id is for an adoptable breed
router.post("/", (req, res) => {
  if (req.body.reference_id > 0){
    Favorite.create(req.body)
      .then( resp => res.json({ status: "success", payload: resp }))
      .catch( err => res.json({ msg: err.message }))
  } else {
    res.json({msg: "ERROR: Invalid reference ID."})
  }
})

router.delete("/:id", (req, res) => {
  Favorite.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id || 0
    }
  })
  .then( resp => res.json({ status: "success", payload: resp }))
  .catch( err => res.json({ msg: err.message }))
})

module.exports = router