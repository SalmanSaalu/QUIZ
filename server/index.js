const Message = require('./models/Product');
const Questions = require('./models/Question');
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Answer=require('./models/Answer');

const PORT = process.env.PORT || 3001;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/quiz');

const app = express();

app.use(bodyParser.json());

// require('./routes/productRoutes')(app);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));

//     const path = require('path');
//     app.get('*', (req,res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })

//   }
//getting all answers/listinguserans
app.get("/listinguserans", async (req, res) => {
  // console.log('working')
  const a = await Answer.find({})

  res.json(a);


});




//getting all question code which attended bu users after submitting its answer (only based on aperson)
app.post("/listinguserqst", (req, res) => {

  Questions.exists({ username: req.body.username}, async function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      // console.log(doc)
      if (doc === null) {
        console.log('error')
        a='no answer'
        res.json(a)
      }
      else {
        // console.log('qqq')
        const a = await Questions.distinct("questioncode",{ username: req.body.username })
        // console.log(a);
        res.json(a);
      }
    }
  })
})




//validateanswer
app.post("/validateanswer", (req, res) => {

  Answer.exists({ username: req.body.username,questioncode:req.body.questioncode}, async function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      // console.log(doc)
      if (doc === null) {
        console.log('error')
        a='loading answers'
        res.json(a)
      }
      else {
        // console.log('qqq')
        const a = await Answer.find({ username: req.body.username,questioncode:req.body.questioncode })
        // console.log(a);
        res.json(a);
      }
    }
  })
})





//allexistanswers
app.post("/allexistanswers", (req, res) => {

  Answer.exists({ username: req.body.username}, async function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      // console.log(doc)
      if (doc === null) {
        console.log('error')
        a='no questions answered'
        res.json(a)
      }
      else {
        // console.log('qqq')
        const a = await Answer.distinct("questioncode",{ username: req.body.username })
        // console.log(a);
        res.json(a);
      }
    }
  })
})




//existuseranswer
app.post("/existuseranswer", (req, res) => {

 Answer.exists({ username: req.body.username, questioncode: req.body.questioncode }, async function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      // console.log(doc._id)
      if (doc === null) {
        console.log('error')
        a = "not exist" 
        res.json(a)
      }
      else {
        console.log(doc)
        var a = "already attempted"
        console.log("Result :", a) // false
        res.json(a)
      }

    }
  });
})

//adding answers to answers
  app.post('/savingallanswers', (req, res) => {
    // console.log('work')
    console.log(req.body);
    const doc = new Answer({ username: req.body.username, questioncode: req.body.questioncode, answers: req.body.answers })
    doc.save();
  })


//all added unique questionscode for that user
app.post('/allquestions', async (req, res) => {
 
  await Questions.exists({ username: req.body.username}, async function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      // console.log(doc)
      if (doc === null) {
        console.log('error')
        a='question not added'
        res.json(a)
      }
      else {
        // console.log('qqq')
        const a = await Questions.distinct("questioncode",{ username: req.body.username })
        // console.log(a);
        res.json(a);
      }
    }
  })
})

//to fetch all corresponding question code questions
app.post('/getallquestion', async (req, res) => {
 
  await Questions.exists({ questioncode: req.body.questioncode}, async function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      // console.log(doc)
      if (doc === null) {
        console.log('error')
        a="wait for response"
        res.json(a)
      }
      else {
        // console.log('qqq')
        const a = await Questions.find({ questioncode: req.body.questioncode })
        // console.log(a);
        res.json(a);
      }
    }
  })
})


app.post('/stored', (req, res) => {
  // console.log('work')
  console.log(req.body);
  const doc = new Message({ username: req.body.username, email: req.body.email, password: req.body.password })
  doc.save();
})

app.post('/question', (req, res) => {
  // console.log('work')
  console.log(req.body.number);
  const doc = new Questions({
    number: req.body.number, question: req.body.question, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3, option4: req.body.option4, answer: req.body.option4,
    questioncode: req.body.questioncode, username: req.body.username
  })
  console.log('working')
  doc.save();
})

app.post('/getquestion', async (req, res) => {
  console.log(req.body);
  await Questions.exists({ questioncode: req.body.questioncode }, async function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      // console.log(doc)
      if (doc === null) {
        // console.log('error')

        res.json({ a: "question code not match" })
      }
      else {
        // console.log('qqq')
        const a = await Questions.find({ questioncode: req.body.questioncode })
        // console.log(a);
        res.json(a);
      }
    }
  })
})

// db.collection('demo').insertOne(req.body, (err, data) => {
//   if(err) return console.log(err);
//   res.send(('saved to db: ' + data));
app.get("/base", async (req, res) => {
  // console.log('working')
  const a = await Message.find({})

  res.json(a);


});

app.post("/based", (req, res) => {

  Message.exists({ email: req.body.email, password: req.body.password }, async function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      // console.log(doc._id)
      if (doc === null) {
        console.log('error')
        a = { username: "email or password is not match" }
        res.json(a)
      }
      else {
        var a = await Message.findOne({ '_id': doc._id })
        console.log("Result :", a) // false
        res.json(a)
      }

    }
  });
  // if ( Message.find({'email':req.body.email},{'password':req.body.password}  )){
  //   const doc = new Message({email:req.body.email,password:req.body.password})
  //   console.log(doc)}

  // else{
  //   console.log("password not match")
  //   // res.json("password not match")
  // }
  // const a = await Message.find({})
  // console.log(doc)
  // res.json(a);
});



app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);


});