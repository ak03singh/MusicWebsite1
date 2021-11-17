const express=require('express');
const app=express();
const port=80;
const path=require('path');
const bodyparser =require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactMusic',{useNewUrlParser: true});

var ContactSchema = new mongoose.Schema({
    name: String,
    address: String,
    age: String,
    Phone: String,
    desc: String
  });
  var Contact = mongoose.model('contact', ContactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory



app.get("/",(req,res)=>{
    res.status(200).render("home1.pug");
})
app.get("/english",(req,res)=>{
    res.status(200).render("home.pug");
})
app.get("/about",(req,res)=>{
    res.status(200).render("about.pug");
})
app.get("/contact",(req,res)=>{
    res.status(200).render("contact.pug");
})
app.post('/contact', (req, res)=>{
    var myData=new Contact(req.body);
    
    myData.save().then(()=>{
        res.send("Your Concern Has Been Recorded");
        // as .save returns promise so 'then' is added.
    }).catch(()=>{
        res.status(400).send("Concern was not saved")
    });
});
app.listen(port,()=>{
    console.log(`The application started successfully at port ${port}`)
});