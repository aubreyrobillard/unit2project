const express = require('express')
const bcrypt = require('bcryptjs')
const UserModel = require('../models/user')

const router = express.Router();

// signup route //
    router.get('/signup', (req, res) => {
        
        res.render('users/signup.ejs')
    })



//login route //
    try{
        router.get('/login', (req, res) => {
        res.render('users/login.ejs')
        })
    } catch {
        console.log("look here for error", error)
    }





module.exports = router;