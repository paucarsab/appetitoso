const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restSchema = new Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    address: String,
    photo: String,
    phone: String,
    web: String,
    dishes: [{ type: Schema.Types.ObjectId, ref: "Dish" }],
    food_type: { type: [String], enum: ['Española', 'Italiana', 'Mexicana', 'Americana', 'Japonesa', 'China', 'Turca', 'Centroamericana', 'Sudamericana', 'Centroeuropea'] },
    location: { type: [Number], required: true }, // [Long, Lat]
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive' }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Restaurant = mongoose.model('Restaurant', restSchema);
module.exports = Restaurant;
