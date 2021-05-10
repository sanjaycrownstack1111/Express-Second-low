var express = require('express');
var router = express.Router();

router.use(express.json());
/* GET users listing. */

// register/ signup

let usersList=[];
router.post('/register', function(req, res) {
  console.log("Users Register Hit!");  
  /*
  let userRegisterDetails={
    name : req.body.name,
    password : req.body.password,
    email : req.body.email,
    mobileNumber:req.body.mobileNumber,
    dob:req.body.dob
   }
  */

  usersList.filter(function(detail){
    if(detail.email === email){
      res.json("email already exits try another email");
    }
  })
  usersList.push(req.body);
  res.json(usersList);
});

// login 
router.post('/login', function(req, res){

  //console.log("userLogin Hit!");
  let {email,password} = req.body;

  if(!email || !passward){
    res.send("please enter email and passward");
  }
  //filter
  usersList.filter( details => {
  if(details.email === email && details.password === password){
    res.json("Login Success");
  }
  else{
    res.json("User not defined")
  }
  });
})

//crate notes

let userNotesList=[];

router.post('/createnotes',(req,res)=>{
  console.log("createNotes List");  
  userNotesList.push(req.body);
  res.json(userNotesList);
});


// read notes

router.get('/readnotes', function(req,res,next){

  if(!email || !passward){
    res.send("please email and passward");
  }
  res.json(userNotesList);
})


// delete his own note
router.delete('/deletenotes/:id',async(req,res)=>{
  console.log("delete User Hit!");
  console.log("Before Deletion");
  console.log(userNotesList);
  let {email}=req.body;

  usersList.filter(function(detail){
    if(detail.email != email){
      res.json("email not found");
    }
  });

  let filterList;
  filterList = await userNotesList.filter((notedetails) => {
  if(notedetails.email != email){
    console.log(email);
    return notedetails;
  }
  // data exchange ->json
  // browser -> send
  });
  res.json(filterList);
  console.log("After deletion");
  console.log(filterList);
});



module.exports = router;
