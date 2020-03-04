const express = require('express')
const router = express.Router()
const Restaurant = require('../models/Restaurant')

router.get('/all', (req, res, next) => {
    Restaurant.find()
        .then(allRestaurants => res.json(allRestaurants))
        .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {
    Restaurant.findById(req.params.id)
        .then(theRest => res.json(theRest))
        .catch(err => console.log(err))
})

router.post('/new', (req, res, next) => {
    Restaurant.create(req.body)
        .then(theRest => res.json(theRest))
        .catch(err => console.log(err))
})

module.exports = router