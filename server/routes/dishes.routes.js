const express = require('express')
const router = express.Router()
const Dish = require('../models/Dish')

router.get('/all', (req, res, next) => {
  Dish.find()
    .then(allDishes => res.json(allDishes))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {
  Dish.findById(req.params.id)
    .then(theDish => res.json(theDish))
    .catch(err => console.log(err))
})

router.get('/search/:dish', (req, res, next) => {
  console.log("hola back route")
  console.log(req.params.dish)
  Dish.find({ $or: [{ name: new RegExp(req.params.dish, "gi") }, { ingredients: new RegExp(req.params.dish, "gi") }] })
    .then(theDish => {
      res.json(theDish)
    })
    .catch(err => console.log(err))
})

router.post('/new', (req, res, next) => {
  Dish.create(req.body)
    .then(theDish => res.json(theDish))
    .catch(err => console.log(err))
})

module.exports = router