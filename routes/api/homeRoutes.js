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

// TODO: This is currently not working.  Promises not working right with
//       async-await.  Probably not implemented right and don't know if
//       it needs complete restructuring.
// router.get("/10", (req, res) => {
//   fetch(url+"/10")
//     .then(res => res.json())
//     .then(data => {
//       const someFunction = (myArray) => {
//         const promises = myArray.map(async (elem) => {
//           const breed = get_breed_from_url(elem)
//           return {
//             id: "my_id",
//             myValue: await Reference.findOne({ where: { dog_ceo_code: breed } })
//           }
//         });
//         return Promise.all(promises).then((values) => values);
//       }
//       const exp_data = someFunction(data.message)
//       console.log("!!!!!!!!!!!!!!!")
//       console.log(exp_data)
//       console.log("!!!!!!!!!!!!!!!")
//       res.send(data)
//     })
// })

module.exports = router;
