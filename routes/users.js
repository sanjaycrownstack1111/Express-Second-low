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

// register/ signup
router.post('/register', function(req, res) {
  let user = {
    Id : data.length +1,
    name : req.body.name,
    email : req.body.email,
    passward : req.body.passward
  }

  if(!user.email || !user.passward){
    res.json("invalid details")
  }else{
    data.filter(function(detail){
      if(detail.email === user.email){
        res.json("email already exits");
      }
    })
  }
  data.push(user);
  res.json(data);
});

// login 
router.post('/login', function(req, res){

    email = req.body.email,
    passward = req. body.passward


  if(!email || !passward){
    res.send("please enter both");
  }
  else{
    data.filter(function(detail){detail
      if(detail.email === email && detail.passward === passward){
        res.send("logged in succesfully");
      }
      else{
        res.send("wrong id or passward");
      }
    })
  }
})


//crate notes
let userNotesList=[
  {"userNotes":""}
 ];


router.post('/createnotes',(req,res)=>{
console.log("createNotes List");  
let userNotes=req.body.userNotes;
userNotesList.push(userNotes);
res.json(userNotesList);
});

// read notes
router.get('/notes/:id', function(req,res,next){
  let Id = req.params.Id;
  let index = data.findIndex((detail)=>{
    return(detail.Id ==  Number.parseInt(Id));
  })
  if(index >= 0){
    let s = data[index]
    s.note = note
    res.send(s.note);
  }
  next();
})


// delete his own note
router.delete('/:id', function(req,res){
  let Id = req.params.Id;
  let index = data.findIndex((detail)=>{
    return (detail.Id == Number.parseInt(Id))
  })
  if(index >= 0){
    let std = data[index]
    detail.splice(index,1);
    res.send("deleted");
  }

})


module.exports = router;
