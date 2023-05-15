const router = require("express").Router();
const https = require("https");

const url = 'https://dog.ceo/api/breeds/image/random';

router.get("/", (req, res) => {
  const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });
  
    response.on('end', () => {
        const body = JSON.parse(data);
        res.json(body);
    });
  })
    
  request.on('error', (error) => {
      res.json({msg: error});
  });
    
  request.end()
})

module.exports = router;
