const express = require('express')
const router = express.Router()
const Dish = require('../models/Dish')

router.get('/all', (req, res, next) => {
  Dish.find()
    .then(allDishes => res.json(allDishes))
    .catch(err => console.log(err))
})
router.get('/score', (req, res, next) => {
  Dish.find().sort({ score: -1 }).limit(5)
    .then(bestDishes => res.json(bestDishes))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {
  Dish.findById(req.params.id).populate("restaurant_id").sort({ score: -1 })
    .then(theDish => res.json(theDish))
    .catch(err => console.log(err))
})

router.get('/search/:dish', (req, res, next) => {
  Dish.find({ $or: [{ name: new RegExp(req.params.dish, "gi") }, { ingredients: new RegExp(req.params.dish, "gi") }] }).sort({ score: -1 }).populate("restaurant_id")
    .then(theDish => {
      res.json(theDish)
    })
})

router.post('/new', (req, res, next) => {
  Dish.create(req.body)
    .then(theDish => res.json(theDish))
    .catch(err => console.log(err))
})

module.exports = router