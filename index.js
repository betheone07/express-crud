const express = require("express")
const app = express()


let student = [
  {
    id: 1,
    name: 'Arnab',
    mentor: null
  },
  {
    id: 2,
    name: 'Anubhav',
    mentor: null
  },
  {
    id: 3,
    name: 'Raj',
    mentor: null
  },
  {
    id: 4,
    name: 'Rahul',
    mentor: null
  },
  {
    id: 5,
    name: 'Yash',
    mentor: null
  },
  {
    id: 6,
    name: 'Ram',
    mentor: null
  }
]


let mentors = [
  {
    id: 1,
    name: 'Mentee1',
    mentees: []

  },
  {
    id: 2,
    name: 'Mentee2',
    mentees: []
  },
  {
    id: 3,
    name: 'Mentee3',
    mentees: []
  }
]



//to show the students
app.get('/mentees' , (req,res) => {
  res.json(student)
})

//to show all mentors
app.get('/mentors' , (req,res) => {
  res.json(mentors)
})

//to add students to particular mentor
app.put('/mentors/:id' , (req,res) => {

  let myid = req.params.id;
  
    mentors[myid].mentees.push(req.body);
    res.json(mentors);
})


//to assign mentor to student

app.put('/mentees/:id1/mentor/:id2' , (req,res) => {

    let studid = req.params.id1;
    let mentid = req.params.id2;

    student[studid].mentor = mentors[mentid].name;
    res.json(student);
})

//to show all students for a particular mentor

app.get('/mentors/show/:id' , (req,res) => {

  let myid = req.params.id;
  let findstudents = mentors[myid].mentees;

  res.json(findstudents);
})








app.listen(6565)





