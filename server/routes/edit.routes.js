const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Dish = require('../models/Dish')



router.put("/fav/:id", (req, res, next) => {
    const { id } = req.params;
    console.log(req.body.score)
    const rate = req.body.score
    User.findByIdAndUpdate(req.params.id, { $push: { favDishes: req.body } })
        .then(() => {
            console.log("entra a updatear")
            console.log(req.body.comment)
            info = { user: id, comment: req.body.comment }
            Dish.findByIdAndUpdate(req.body.dish, { $push: { comments: info } })
                .then(() => {
                    Dish.findByIdAndUpdate(req.body.dish, { $push: { score: rate } })
                        .then(updatedDish => {
                            console.log("entra en el updatedDish")
                            console.log(updatedDish)
                            res.status(200).json({ message: `User ${id} updated` });
                        })
                })

        })

        .catch(error => {
            res.status(500).json({ message: "Something went wrong" });
        });
});


router.post('/fav', (req, res) => {


    // let favDish = req.body;
    // Dish.findByIdAndUpdate(req.user._id, { $push: { favDishes: favDish.id } })
    //     .then(() => res.json({ ok: true }))
    //     .catch((err) => res.json(err))
});

module.exports = router