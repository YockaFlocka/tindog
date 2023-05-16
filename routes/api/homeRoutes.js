const router = require("express").Router();
const { Reference } = require("../../models");
const get_breed_from_url = require("../../utils/helpers")

const url = 'https://dog.ceo/api/breeds/image/random';

router.get("/", (req, res) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const breed = get_breed_from_url(data.message)
      Reference.findOne({ where: { dog_ceo_code: breed } })
        .then((result) => {
          console.log(result)
          const exp_data = {
            message: {
              photo_url: data.message,
              ref_code: breed,
              ref_id: result ? result.id : -1,
              adoptable: result ? result.whitelist : false
            }
          }
          res.send(exp_data)
        })
    })
})

module.exports = router;
