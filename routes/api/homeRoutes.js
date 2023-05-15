const router = require("express").Router();
// const https = require("https");

const url = 'https://dog.ceo/api/breeds/image/random/10';

router.get("/", (req, res) => {
  const getBreed = dog =>
    dog.message.split("breeds/")[1].split("/")[0]

  // let sent = false
  // while (!sent) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // if (getBreed(data) === "kuvasz") {
          res.send(data)
          // sent = true
        // }
      })
  // }
})

module.exports = router;
