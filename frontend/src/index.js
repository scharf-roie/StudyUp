const express= require("express");
const app=express();
const ejs =require("ejs");
const session = require('express-session');
const passport = require("passport");
const mongoose = require('mongoose-findorcreate');
var findOrCreate = require('mongoose-findorcreate');
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

app.set('view engine', 'ejs');
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://http://localhost:3002/Oauth", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  userId:String,
  name:String
});
userSchema.plugin(findOrCreate);
const Users = mongoose.model("user",userSchema);

passport.serializeUser(function(user, cb){
  cb(null, user);
  });
  passport.deserializeUser(function(obj, cb){
    cb(null, obj);
  });

passport.use(new GoogleStrategy({
  clientID: "your id",
  clientSecret: "your secret id",
  callbackURL: "http://localhost:3002/auth/google/secret"
},
  function(token, tokenSecret, profile, done){
    Users.findOrCreate({userId: profile.id,name:profile.displayName }, function (err, user){
      return done(err, user);
    });
  }
));

app.get('/auth/google',
  passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/plus.login']})
);

app.get('/auth/google/secret',
  passport.authenticate('google', { failureRedirect: '/'}),
  function(req,res) {
    res.redirect('/welcome');
});

app.get('/', function(req, res){
  if (req.isAuthenticated()){
    res.render("welcome", {username:req.user.name});
  }
  else {
    res.render("home");
  }
});

app.get('welcome', function(req, res){
  if (req.isAuthenticated()){
    res.render("welcome", {username:req.user.name});
  }
});

app.get('/logout', function(req, res){
  req.logOut();
  res.redirect("/");
});

app.listen(3000, function(req,res){
  console.log("running on 3002");
});
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
