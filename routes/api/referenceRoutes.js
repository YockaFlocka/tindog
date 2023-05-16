const router = require("express").Router();
const Reference = require("../../models/Reference");

router.get("/by_code/:code", (req, res) => {
  Reference.findOne({ where: { dog_ceo_code: req.params.code } })
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

module.exports = router
