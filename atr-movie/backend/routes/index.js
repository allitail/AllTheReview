var express = require('express');
var router = express.Router();

const api = require("./api");

/* GET home page. */
router.get('/', function(req, res, next) {

  // res.render('index', { title: 'Express' });
  
  console.log("path="+req.path);
  next();

});

router.use("/api", api);

router.all('/', (req, res)=>{
  res.send("{message:All The Review}");
})







module.exports = router;
