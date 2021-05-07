var express = require('express');
var router = express.Router();

router.use(express.json());
/* GET users listing. */
let data =[
  {
    "Id" : 1,
    "name" : "sanjay",
    "email" : "sanjay@gmail.com",
    "passward" : "1234@",
    "note" : "hi this is sanjay"
  },{
    "Id" : 2,
    "name" : "akash",
    "email" : "aksah@gmail.com",
    "passward" : "987@",
    "note" : "hi this is aakash"
  }
]

let note = [

]
// register/ signup
router.post('/register', function(req, res) {
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

// login 
router.post('/login', function(req, res){

  let email = req.body.email,
  let passward = req.body.passward
  
  if(!email || !passward){
    res.send("please enter both");
  }
  else{
    data.filter(function(detail){
      if(detail.email === email && detail.passward === passward){
        res.send("logged in");
      }
      else{
        res.send("wrong id or passward");
      }
    })
  }
})





// delete his own note
router.delete('/:id', function(req,res){
  let Id = req.params.Id;
  let passward = req.body.passward;
  if(!Id || !passward){
    res.send("enter both");
  }else{
    let index = data.findIndex((detail)=>{
      return detail.Id == Number.parseInt(Id);
    })
    if(index >= 0){
      let s = data[index];
      data.splice(index,1);
      res.send("deleted");
    }
  }
})


module.exports = router;
