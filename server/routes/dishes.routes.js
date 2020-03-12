const express = require('express')
const router = express.Router()
const Dish = require('../models/Dish')
const Restaurants = require('../models/Restaurant')

router.get('/all', (req, res, next) => {
  Dish.find()
    .then(allDishes => res.json(allDishes))
    .catch(err => console.log(err))
})

router.get('/score', (req, res, next) => {
  Dish.aggregate([
    {
      '$addFields': {
        'sumScore': {
          '$avg': '$score'
        }
      }
    }
  ]).sort({ sumScore: -1 }).limit(5).exec((err, dishes) => {
    if (err) throw err;
    res.json(dishes);
  })
})


// router.get('/score', (req, res, next) => {
//   Dish.find().sort({ sumScore: -1 }).limit(5)
//     .then(bestDishes => res.json(bestDishes))
//     .catch(err => console.log(err))
// })

router.get('/:id', (req, res, next) => {
  Dish.findById(req.params.id).populate("restaurant_id").populate('comments.user').sort({ score: -1 })
    .then(theDish => res.json(theDish))
    .catch(err => console.log(err))
})

router.get('/search/:dish', (req, res, next) => {
  let foundDish;
  Dish
    .aggregate([
      { $match: { $or: [{ name: new RegExp(req.params.dish, "gi") }, { ingredients: new RegExp(req.params.dish, "gi") }] } },
      {
        '$addFields': {
          'sumScore': {
            '$avg': '$score'
          }
        }
      },
      {
        '$lookup': {
          'from': 'restaurants',
          'localField': 'restaurant_id',
          'foreignField': '_id',
          'as': 'rest'
        }
      }
    ])
    .exec((err, dishes) => {
      console.log(dishes)
      if (err) throw err;
      res.json(dishes);
    })
})

// router.get('/search/:dish', (req, res, next) => {
//   Dish.find({ $or: [{ name: new RegExp(req.params.dish, "gi") }, { ingredients: new RegExp(req.params.dish, "gi") }] }).sort({ score: -1 }).populate("restaurant_id")
//     .then(theDish => {
//       res.json(theDish)
//     })
// })


// router.get('/search/:dish', (req, res, next) => {
//   Dish.find({ $or: [{ name: new RegExp(req.params.dish, "gi") }, { ingredients: new RegExp(req.params.dish, "gi") }] }).populate("restaurant_id")
//     .then(let sum = score.reduce((previous, current) => current += previous);
//   let avg = sum / score.length;)
//   .then(theDish => {
//     res.json(theDish)
//   })
// })

router.post('/new', (req, res, next) => {
  Dish.create(req.body)
    .then(theDish => res.json(theDish))
    .catch(err => console.log(err))
})

module.exports = router