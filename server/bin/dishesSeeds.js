const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Dish = require("../models/Dish");

const bcryptSalt = 10;

mongoose
    .connect('mongodb://localhost/appetitoso', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

let dishes = [
    {
        name: "Hamburguesa Steak burguer",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5089.jpg",
        ingredients: ["Lechuga", "tomate", "cebolla caramelizada", "queso gouda", "exclusiva salsa STB"],
        restaurant_id: "5e5d6adbff530330effca28c",
        intolerances: ["Dairy"],
        score: 4.5,
        comments: [],
        price: 11.89
    },
    {
        name: " Hamburguesa Jack burger",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5041-1.jpg",
        ingredients: ["Lechuga", "tomate", "queso gouda", "bacon", "salsa bourbon", "cebolla rebozada casera"],
        restaurant_id: "5e5d6adbff530330effca28c",
        intolerances: ["Dairy"],
        score: 4.4,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa barbacoa",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5072.jpg",
        ingredients: ["Lechuga", "tomate", "bacon", "cebolla", "queso gouda", "salsa barbacoa"],
        restaurant_id: "5e5d6adbff530330effca28c",
        intolerances: ["Dairy"],
        score: 4,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa La Pampa",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5041-1.jpg",
        ingredients: ["Rúcula", "tomate", "cebolla caramelizada", "queso provolone", "salsa chimichurri con mayonesa."],
        restaurant_id: "5e5d6adbff530330effca28c",
        intolerances: ["Dairy"],
        score: 3.5,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa British",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/05/mexican.png",
        ingredients: ["Lechuga", "tomate", "cebolla", "queso gouda", "huevo campero frito", "bacon"],
        restaurant_id: "5e5d6adbff530330effca28c",
        intolerances: ["Dairy", "Egg"],
        score: 3.4,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa Steak burguer",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5089.jpg",
        ingredients: ["Lechuga", "tomate", "cebolla caramelizada", "queso gouda", "exclusiva salsa STB"],
        restaurant_id: "5e5d6adbff530330effca28e",
        intolerances: ["Dairy"],
        score: 4.6,
        comments: [],
        price: 11.89
    },
    {
        name: " Hamburguesa Jack burger",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5041-1.jpg",
        ingredients: ["Lechuga", "tomate", "queso gouda", "bacon", "salsa bourbon", "cebolla rebozada casera"],
        restaurant_id: "5e5d6adbff530330effca28e",
        intolerances: ["Dairy"],
        score: 4.3,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa barbacoa",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5072.jpg",
        ingredients: ["Lechuga", "tomate", "bacon", "cebolla", "queso gouda", "salsa barbacoa"],
        restaurant_id: "5e5d6adbff530330effca28e",
        intolerances: ["Dairy"],
        score: 4.1,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa La Pampa",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5041-1.jpg",
        ingredients: ["Rúcula", "tomate", "cebolla caramelizada", "queso provolone", "salsa chimichurri con mayonesa."],
        restaurant_id: "5e5d6adbff530330effca28e",
        intolerances: ["Dairy"],
        score: 3.8,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa British",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/05/mexican.png",
        ingredients: ["Lechuga", "tomate", "cebolla", "queso gouda", "huevo campero frito", "bacon"],
        restaurant_id: "5e5d6adbff530330effca28e",
        intolerances: ["Dairy", "Egg"],
        score: 3.6,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa Steak burguer",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5089.jpg",
        ingredients: ["Lechuga", "tomate", "cebolla caramelizada", "queso gouda", "exclusiva salsa STB"],
        restaurant_id: "5e5d6adbff530330effca28c",
        intolerances: ["Dairy"],
        score: 4.6,
        comments: [],
        price: 11.89
    },
    {
        name: " Hamburguesa Jack burger",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5041-1.jpg",
        ingredients: ["Lechuga", "tomate", "queso gouda", "bacon", "salsa bourbon", "cebolla rebozada casera"],
        restaurant_id: "5e5d6adbff530330effca294",
        intolerances: ["Dairy"],
        score: 4.4,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa barbacoa",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5072.jpg",
        ingredients: ["Lechuga", "tomate", "bacon", "cebolla", "queso gouda", "salsa barbacoa"],
        restaurant_id: "5e5d6adbff530330effca294",
        intolerances: ["Dairy"],
        score: 4.3,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa La Pampa",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/07/DSC5041-1.jpg",
        ingredients: ["Rúcula", "tomate", "cebolla caramelizada", "queso provolone", "salsa chimichurri con mayonesa."],
        restaurant_id: "5e5d6adbff530330effca294",
        intolerances: ["Dairy"],
        score: 3.4,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa British",
        photo: "https://www.steakburger.es/wp-content/uploads/2019/05/mexican.png",
        ingredients: ["Lechuga", "tomate", "cebolla", "queso gouda", "huevo campero frito", "bacon"],
        restaurant_id: "5e5d6adbff530330effca294",
        intolerances: ["Dairy", "Egg"],
        score: 3.7,
        comments: [],
        price: 11.89
    },
    {
        name: "Hamburguesa Doublechin",
        photo: "https://www.alright.es/wp-content/uploads/2019/06/quienes-somos.jpg",
        ingredients: ["Papada Iberica", "Mayo japokimuchi", "cebolla encurtida"],
        restaurant_id: "5e5d6adbff530330effca28d",
        intolerances: ["Dairy"],
        score: [4.4],
        comments: [],
        price: 12.50
    },
    {
        name: "Hamburguesa Nebraska Brisket",
        photo: "https://www.googleapis.com/download/storage/v1/b/static-goxo/o/dishes%2F156121015423407886669147624878.JPEG?generation=1561210154348592&alt=media",
        ingredients: ["Angus de Nebraska", "Cebolla pochada y flambeada", "Salsa ahumada", "Queso Monterrey Jack"],
        restaurant_id: "5e5d6adbff530330effca28d",
        intolerances: ["Dairy"],
        score: [4.6],
        comments: [],
        price: 13.50
    },
    {
        name: "Hamburguesa Memphis pulled pork",
        photo: "https://www.googleapis.com/download/storage/v1/b/static-goxo/o/dishes%2F156121015423407886669147624878.JPEG?generation=1561210154348592&alt=media",
        ingredients: ["Costilla de cerdo", "cadera de cerdo", "queso"],
        restaurant_id: "5e5d6adbff530330effca28d",
        intolerances: ["Dairy"],
        score: [4.6],
        comments: [],
        price: 13.50
    },
]

Dish.deleteMany()
    .then(() => {
        return Dish.create(dishes)
    })
    .then(dishesCreated => {
        console.log(`${dishesCreated.length} dishes created with the following id:`);
        console.log(dishesCreated.map(u => u._id));
    })
    .then(() => {
        // Close properly the connection to Mongoose
        mongoose.disconnect()
    })
    .catch(err => {
        mongoose.disconnect()
        throw err
    })