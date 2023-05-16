const router = require("express").Router();
const { Favorite, Reference } = require("../../models");


router.get("/", (req, res) => {
  Favorite.findAll({ where: { user_id: req.session.user_id || 0 } })
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

// Version with reference_id
// router.post("/", (req, res) => {
//   Favorite.create(req.body)
//     .then( resp => res.json({ status: "success", payload: resp }))
//     .catch( err => res.json({ msg: err.message }))
// })

// Version with dog_ceo_code
router.post("/", async (req, res) => {
  const ref = await Reference.findOne({ where: { dog_ceo_code: req.body.dog_ceo_code } })
  let {dog_ceo_code: _, ...data} = req.body
  data.reference_id = ref.id
  Favorite.create(data)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
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