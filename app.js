const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const nodemailer = require('nodemailer');
// /const mongoose = require('mongoose');
// const register = require('./model/register');
// require('../database/conns')


//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// static middleware
app.use(express.static('public'));


// GET
app.get('/podcastLayout.com', (req, res)=>{
    res.status(200).render("index");
})

app.get('/newPodcasts', (req, res)=>{
    res.status(200).render("podcast");
})

app.get('/', (req, res)=>{
    res.status(400).render("page404", {  title: 'Home'});
})


// POST
// form 
app.post('/register', (req,res) =>{
    try{
        // const newEntry = new register({
        //     fname: req.body.fname,
        //     lname: req.body.lname,
        //     country: req.body.country,
        //     email: req.body.email,
        //     dob: req.body.dob,
        //     password: req.body.password,
        //     ccno: req.body.ccno,
        //     pin: req.body.pin
        // });

        // const registered = await newEntry.save();
        res.render('home', {
            username: req.body.firstName + " " + req.body.lastName,
        });
        console.log("registered");
    }
    catch(e){
        res.status(400).send("not register");
    }
})


// subscription
const transporter = nodemailer.createTransport({
    tls: {
        rejectUnauthorized: false
      },
    // service: 'Gmail', // e.g., Gmail, Outlook
    // auth: {
    //   user: '',
    //   pass: ''
    // }
});

function sendSubscriptionEmail(email) {
    const mailOptions = {
      from: 'maazamehmood831@gmail.com',
      to: email,
      subject: 'Thank you for subscribing',
      text: 'Dear subscriber, thank you for subscribing to our newsletter.'
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
}

app.post('/subscribe', (req, res) => {
    const { email } = req.body.email_address;
  
    // Save the email to your database or perform any necessary operations
  
    // Send the subscription confirmation email
    
    sendSubscriptionEmail(email);
    res.render('subscription');
});


app.listen(port, ()=>{
    console.log('Server is listening at port '+port);
})