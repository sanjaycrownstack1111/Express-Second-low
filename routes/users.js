var express = require('express');
var router = express.Router();

router.use(express.json());
/* GET users listing. */
let data =[
  {
    "Id" : 1,
    "name" : "sanjay",
    "email" : "sanjay@gmail.com",
    "passward" : "1234@"
  },{
    "Id" : 2,
    "name" : "akash",
    "email" : "aksah@gmail.com",
    "passward" : "987@"
  }
]

// register
router.post('/register', function(req, res, next) {
  let user = {
    Id : data.length +1,
    name : req.body.name,
    email : req.body.email,
    passward : req.body.passward
  }

  if(!email || !passward){
    res.send("invalid details")
  }else{
    data.filter(function(detail){
      if(detail.email === email){
        res.send("email already exits");
      }
    })
  }
  data.push(user);
  res.json(data);
});







module.exports = router;
