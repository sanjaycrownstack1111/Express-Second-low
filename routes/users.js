const express = require('express');
const router = express.Router();

const db = require('../database');

router.use(express.json());

/* GET users listing. */



router.post('/checkdb',(req,res) =>{
  let {email,passward} = req.body;
  console.log(email, passward);
})


let userList = [];

//register

router.post('/register',function(req,res){
  console.log("user hit");

  let {email} = req.body
  userList.filter(function(detail){
    if(detail.email === email){
      res.send({message : "email already register try another email"});
    }
  })
  userList.push(req.body);
  res.json(userList);
});


//login

router.post('/login',(req,res) =>{
  console.log("login hit");

  let{email,passward} = req.body;

  if(!email && !passward){
    res.send({message :"enter email and passward"});
  }
  
  userList.filter( details =>{
    if(details.email === email && details.passward === passward){
      res.send({message : "login succes"});
    }else {
      res.send({message : "login failed enter valid email and passward"});
    }
  });
});

//create notes

let userNote = [];

router.post('/createnotes',(req,res) =>{
  console.log("hit create notes");

  let {email,passward} = req.body;
  if(!email && !passward){
    res.send({message : "enter email and passward"});
  }
  userNote.push(req.body);
  res.json(userNote);
});

//read notes

router.get('/readnotes',(req,res) =>{
  console.log('readnotes hit');
  let{email} = req.body;
  userNote.filter( detail =>{
    if(detail.email === email){
      res.json(userNote);
    }else {
      res.send({message : "email not found"});
    }
  })
});

//delete notes

router.delete('/deletenotes',async(req,res) =>{
  console.log("delete hit");
  console.log('before delete');
  console.log(userNote);

  let{email} = req.body;


  // let filterList;
  // filterList = await userNote.filter( detailNote =>{
  //   if(detailNote.email != email){
  //     return detailNote;
  //   }
  //});
  //res.json(filterList);
  console.log("after delete");
  console.log(filterList);
});

module.exports = router;
