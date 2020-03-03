const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: { type: String, required: true },
    photo: String,
    ingredients: [],
    restaurant_id: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    intolerances: { type: [String], enum: ['Gluten', 'Shellfish', 'Egg', 'Fish', 'Peanuts', 'Soy', 'Dairy', 'Tree Nuts', 'Celery', 'Mustard', 'Sesame', 'Sulphur Dioxide', 'Lupin', 'Molluscs'] },
    score: [Number],
    comments: [{ user: { type: Schema.Types.ObjectId, ref: "User" }, content: String }],
    price: Number
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Dish = mongoose.model('Dish', dishSchema);
module.exports = Dish;
