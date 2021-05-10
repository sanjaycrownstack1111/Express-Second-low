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
  { "id":"",
   "userNotes":""
  }
];
router.post('/createnotes',(req,res)=>{
console.log("createNotes List");  
let userNotesObject={
  id : req.body.id,
  userNotes : req.body.userNotes
};
userNotesList.push(userNotesObject);
res.json(userNotesList);
});


// read notes
router.get('/notes/:id', function(req,res,next){
  let Id = req.params.Id;
  let index = userNotesList.findIndex((detail)=>{
    return(detail.Id ==  Number.parseInt(Id));
  })
  if(index >= 0){
    let getValue = data[index]
    s.note = note;
    res.send(s.note);
  }
  next();
})


// delete his own note
router.delete('/deletenotes/:id',(req,res)=>{
  console.log("delete User Hit!");

  console.log("Before Deletion");
  console.log(userNotesList);

  let getId = req.params.id;
  let index = userNotesList.findIndex((Notes)=>{
    return (Notes.id == Number.parseInt(getId))
  });
  if(index >0){
    let std = userNotesList[index];
    userNotesList.splice(index, 1);
    res.send("deleted");
  }else{
    res.send("ID NOT found");
  }
  });
  console.log("after deletion");
  console.log(data);


module.exports = router;
