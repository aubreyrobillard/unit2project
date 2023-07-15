const express = require('express')
const bcrypt = require('bcryptjs')
const UserModel = require('../models/user')

const router = express.Router();

// signup route //
    router.get('/signup', (req, res) => {
        
        res.render('users/signup.ejs')
    })

// signup post route //
    router.post('/signup', async (req, res) => {

        try {
            req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(15))

            await UserModel.create(req.body)

            res.redirect('/user/login')
        
        } catch {
            
            res.send("This username already exists")
        }
    });


//login route //
    router.get('/login', (req, res) => {
        res.render('users/login.ejs')
    });
 

// login post route //
    router.post('/login', async (req, res) => {
        // res.send('login') used this in setup w/ mongo
        const user = await UserModel.findOne({ username: req.body.username })
        if(!user) {
            res.send('This user does not exist. Please signup for an account')
        } else {
            const passmatches = bcrypt.compareSync(req.body.password, user.password)
            if(passmatches){
                req.session.username = req.body.username;
                req.session.loggedIn = true;
                res.redirect('/restaurants'); 
            } else {
                res.send('The password entered does not match this username')
            };
        }
    });


// route to destroy the session and have the use redirect to /homepage route
    router.get('/logout', (req, res) => {
        req.session.destroy(err => {
            res.redirect('/');
        })
    });


module.exports = router;