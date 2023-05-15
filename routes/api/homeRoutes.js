const router = require("express").Router();
// const https = require("https");
const get_breed_from_url = require("../../utils/helpers")

const url = 'https://dog.ceo/api/breeds/image/random/10';

router.get("/", (req, res) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      for(i=0;i<data.message.length;i++){
        console.log(get_breed_from_url(data.message[i]))
      }
      console.log(data.message.map((elem) => get_breed_from_url(elem)))
      res.send(data)
    })
})

module.exports = router;
