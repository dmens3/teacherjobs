const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Class = require('../models/Class');

router.get('/', (req, res) => 
    Class.findAll()
        .then(classes => {
            res.render('classes', {
                classes
            });
        })
        .catch(err => console.log(err)));

router.get('/add', (req, res) => res.render('add'));

router.post('/add', (req, res) => {
    let { title, price, description, contact_email } = req.body;
    let errors = [];

    if(!title) {
        errors.push({ text: 'Please add a title.' });
    }
    if(!price) {
        errors.push({ text: 'Please add a price.' });
    }
    if(!description) {
        errors.push({ text: 'Please add a short description.' });
    }
    if(!contact_email) {
        errors.push({ text: 'Please add a contact email.' });
    }

    //Error check

    if(errors.length > 0) {
        res.render('add', {
            errors,
            title,
            price,
            description,
            contact_email
        });
    }   else {
            price = `$${price}`;
            Class.create({
                title,
                price,
                description,
                contact_email
            })
                .then(classes => res.redirect('/classes'))
                .catch(err => console.log(err));
        }
});

module.exports = router;