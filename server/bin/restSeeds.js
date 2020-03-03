// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Restaurant = require("../models/Restaurant");

const bcryptSalt = 10;

mongoose
    .connect('mongodb://localhost/appetitoso', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

let restaurants = [
    {
        name: "Los Montes de Galicia",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@losmontesdegalicia.es",
        address: "Calle Azcona 46, 28028 Madrid, España",
        photo: "https://www.economiadehoy.es/fotos/8/MontesdeGalicia_entrelos10mejoresrestaurantesdeMadrid.jpg",
        phone: "+34 913 55 27 86",
        web: "https://losmontesdegalicia.es/",
        dishes: [],
        food_type: ['Española'],
        location: [40.4347222, -3.6682905],
        status: "active"
    },
    {
        name: "Azotea Forus Barceló",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@azoteaforus.com",
        address: "Calle Barcelo, 6, 28004 Madrid, España",
        photo: "https://www.azoteaforus.com/wp-content/uploads/2018/09/espacio2.jpg",
        phone: "+34 915 30 17 61",
        web: "https://www.azoteaforus.com/",
        dishes: [],
        food_type: ['Española'],
        location: [40.4268137, -3.6988964],
        status: "active"
    },
    {
        name: "Entre Santos Madrid",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@entresantos.es",
        address: "Calle San Bartolomè 4, 28004 Madrid, España",
        photo: "https://console.listae.com/files/2019/07/entre_santos_gastrobar_madrid_tapas.jpg",
        phone: "+34 917 55 59 04",
        web: "http://entresantos.es/",
        dishes: [],
        food_type: ['Española'],
        location: [40.4214256, -3.6986669],
        status: "active"
    },
    {
        name: "Restaurante DCorazon",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@restaurantedcorazon.com",
        address: "Plaza Mayor 30, 28012 Madrid, España",
        photo: "https://restaurantedcorazon.com/wp-content/uploads/2018/07/Cueva-Madrid-DCorazon-1024x668.jpg",
        phone: "+ 34 910 69 57 43",
        web: "http://restaurantedcorazon.com/",
        dishes: [],
        food_type: ['Española'],
        location: [40.4157812, -3.706545],
        status: "active"
    },
    {
        name: "El Social",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@elsocialrestaurante.com",
        address: "Calle de Hernán Córtez 19, 28004 Madrid, España",
        photo: "https://u.tfstatic.com/restaurant_photos/837/584837/169/612/el-social-vista-de-la-sala-218d2.jpg",
        phone: "+ 34 911 76 97 35",
        web: "https://www.elsocialrestaurante.com/",
        dishes: [],
        food_type: ['Española'],
        location: [40.4096461, -3.7078816],
        status: "active"
    },
    {
        name: "Fortuny Restaurant & Club",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@fortunyrestaurantclub.com",
        address: "Calle Fortuny 34, 28010 Madrid, España",
        photo: "https://cdn.atrapalo.com/common/photo/res/4075/0/ticr_890_370.jpg",
        phone: "+ 34 913 19 05 88",
        web: "http://www.fortunyrestaurantclub.com/",
        dishes: [],
        food_type: ['Española'],
        location: [40.434559, -3.689976],
        status: "active"
    },
    {
        name: "Vinitius Gran Vía Madrid",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        address: "Gran Vía 4, 28013 Madrid, España",
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/18/9a/9a/e5/entrada.jpg",
        phone: "+ 34 916 14 44 21",
        dishes: [],
        food_type: ['Española'],
        location: [40.4192806, -3.6997573],
        status: "active"
    },
    {
        name: "Restaurante Nuevo Horno de Santa Teresa",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "lolacruz1@msn.com",
        address: "Calle Santa Teresa 8, 28004 Madrid, España",
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/0e/d1/06/62/c.jpg",
        phone: "+34 913 08 05 90",
        web: "https://www.facebook.com/Restaurante-Nuevo-Horno-De-Santa-Teresa-423455807723916/?utm_source=tripadvisor&utm_medium=referral",
        dishes: [],
        food_type: ['Española'],
        location: [40.4256736, -3.6978997],
        status: "active"
    },
    {
        name: "Restaurante Algarabía",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@restaurantealgarabia.com",
        address: "Calle de la Union 8, 28013 Madrid, España",
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/12/67/18/34/solo-seis-mesas.jpg",
        phone: "+34 915 42 41 31",
        web: "http://restaurantealgarabia.com/",
        dishes: [],
        food_type: ['Española'],
        location: [40.417457, -3.7104709],
        status: "active"
    },
    {
        name: "La Gaditana Castellana",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@tabernalagaditana.com",
        address: "Paseo Castellana 56, 28046 Madrid, España",
        photo: "https://tabernalagaditana.com/wp-content/uploads/2019/09/taberna-la-gaditana-1.jpg",
        phone: "+34 910 58 75 38",
        web: "https://tabernalagaditana.com/",
        dishes: [],
        food_type: ['Española'],
        location: [40.4361474, -3.6909359],
        status: "active"
    },
    {
        name: "Pizza 3Cruces",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@pizzatrescruces.com",
        address: "Calle de la Salud 13, 28013 Madrid, España",
        photo: "https://lh5.googleusercontent.com/p/AF1QipOpLFTcLv27wtMmjG_Y59a42JDICvo5cG_cxRPv=w600",
        phone: "+34 915 31 86 53",
        web: "https://www.pizzatrescruces.com/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.4192597, -3.7055965],
        status: "active"
    },
    {
        name: "Gustazio Gastrobar",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@gustazio.com",
        address: "Calle Embajadores 197, 28045 Madrid, España",
        photo: "https://media-cdn.tripadvisor.com/media/photo-p/16/1c/10/34/pinsa-acciuga.jpg",
        phone: "+34 912 30 22 98",
        web: "https://gustazio.com/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.3882719, -3.6931193],
        status: "active"
    },
    {
        name: "Pastamore",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@pastamore.es",
        address: "Calle Alcalá, 191, 28009 Madrid, España",
        photo: "https://u.tfstatic.com/restaurant_photos/607/410607/169/612/pastamore-terrasse-f6a2b.jpg",
        phone: "+34 919 91 54 74",
        web: "https://www.pastamore.es/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.4276872, -3.6721263],
        status: "active"
    },
    {
        name: "Davanti Food & Market",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "reservas@davantirestaurante.com",
        address: "Calle de Augusto Figueroa 41, 28004 Madrid, España",
        photo: "https://console.listae.com/files/2019/04/davanti_food_market_restaurante_madrid.jpg",
        phone: "+34 910 69 78 55",
        web: "http://davantirestaurante.com/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.4221091, -3.6990247],
        status: "active"
    },
    {
        name: "Bombardino Café",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@bombardinocafe.com",
        address: "Calle Salitre, 2, 28012 Madrid, España",
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/0c/11/f2/f5/img-20160719-002945-largejpg.jpg",
        phone: "+34 915 02 24 03",
        web: "http://bombardinocafe.com/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.4101527, -3.6999755],
        status: "active"
    },
    {
        name: "Oven Mozzarella Bar Fuencarral",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@oven.es",
        address: "C/Fuencarral 74, 28004 Madrid, España",
        photo: "https://u.tfstatic.com/restaurant_photos/633/510633/169/612/oven-mozzarella-bar-gran-via-vista-de-la-sala-a380a.jpg",
        phone: "+34 917 86 42 68",
        web: "https://www.oven.es/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.4250444, -3.7028334],
        status: "active"
    },
    {
        name: "Malafemmena",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@malafemmena.com",
        address: "Calle del Doctor Esquerdo 13, 28028 Madrid, España",
        photo: "https://www.madridgoout.com/wp-content/uploads/2018/11/restaurante-malafemmena-madrid-8-1080x520.jpg",
        phone: "+34 913 36 94 20",
        web: "https://www.malafemmena.com/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.4264268, -3.6704888],
        status: "active"
    },
    {
        name: "Pizzeria Fratelli",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@fratellimadrid.es",
        address: "Calle Quero, 83-85, 28024 Madrid, España",
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/0f/d8/77/49/fratelli-s-by-night.jpg",
        phone: "+34 918 28 50 61",
        web: "http://www.fratellimadrid.es/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.3895393, -3.7625954],
        status: "active"
    },
    {
        name: "Oven Mozzarella Bar Atocha",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@oven.es",
        address: "Calle de Atocha, 114, 28012 Madrid",
        photo: "https://cdn.restaurantes.com/static/img/restaurants/135/135875/135875_5635.gl.jpg",
        phone: "+34 910 53 12 46",
        web: "http://www.oven.es/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.4094417, -3.6954994],
        status: "active"
    },
    {
        name: "La Pizzateca",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@lapizzateca.com",
        address: "Calle del León, 35, 28014 Madrid",
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/0a/68/6d/56/la-pizzateca.jpg",
        phone: "+34 913 69 32 10",
        web: "http://www.lapizzateca.com/",
        dishes: [],
        food_type: ['Italiana'],
        location: [40.4127497, -3.7014739],
        status: "active"
    },
    {
        name: "Steakburger Gran Via",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@steakburger.es",
        address: "Calle Gran Vía, 16, 28013 Madrid",
        photo: "https://cdn.restaurantes.com/static/img/restaurants/135/135953/135953_6085.gl.jpg",
        phone: "+34 914 21 92 50",
        web: "https://www.steakburger.es/",
        dishes: [],
        food_type: ['Americana'],
        location: [40.4198256, -3.7016268],
        status: "active"
    },
    {
        name: "Alright",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@alright.es",
        address: "Calle de Pedro Rico, 41, 28029 Madrid",
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/9e/f0/fe/entrada.jpg",
        phone: "+34 912 19 07 25",
        web: "https://www.alright.es/",
        dishes: [],
        food_type: ['Americana'],
        location: [40.4826141, -3.703422],
        status: "active"
    },
    {
        name: "Steakburger Preciados",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@steakburger.es",
        address: "Calle de Preciados, 42, 28013 Madrid",
        photo: "https://cdn.restaurantes.com/static/img/restaurants/200/200083/200083_6669.gl.jpg",
        phone: "+34 910 06 70 77",
        web: "https://www.steakburger.es/",
        dishes: [],
        food_type: ['Americana'],
        location: [40.4198392, -3.709454],
        status: "active"
    },
    {
        name: "Sublime Dreams Food - Plaza Mayor",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@sublimedreamsfood.es",
        address: "Calle de Concepción Jerónima, 28, 28012 Madrid",
        photo: "https://u.tfstatic.com/restaurant_photos/477/206477/169/612/sublime-dreams-food-vista-de-la-sala-ec449.jpg",
        phone: "+34 910 22 41 97",
        web: "https://www.sublimedreamsfood.es/",
        dishes: [],
        food_type: ['Americana'],
        location: [40.4137879, -3.7092548],
        status: "active"
    },
    {
        name: "Burnout",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@burnoutburgers.com",
        address: "Calle de Fuencarral, 148, 28010 Madrid",
        photo: "https://images.squarespace-cdn.com/content/v1/55492355e4b020092b251736/1491334745496-TA65CXKSJDQWR33DYZE8/ke17ZwdGBToddI8pDm48kJESCBTbNjBVSnYWQBjXl2t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZlbJOrEmku6abKwp8zHQxnL19ffYWD6mi7tI5nLmp-M2OvzC_WyG1BY7Fy8dlH1Uw/Burnout201702_web-87.jpg?format=2500w",
        phone: "+34 912 68 09 38",
        web: "http://www.burnoutburgers.com/",
        dishes: [],
        food_type: ['Americana'],
        location: [40.4482189, -3.7351619],
        status: "active"
    },
    {
        name: "Mad Cafe",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "mad@jimfoods.es",
        address: "Calle de la Cava Alta, 13, 28005 Madrid",
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/17/86/06/47/photo0jpg.jpg",
        phone: "+34 911 88 46 04",
        web: "http://madrestaurants.com/",
        dishes: [],
        food_type: ['Americana'],
        location: [40.4122713, -3.7110625],
        status: "active"
    },
    {
        name: "Foodtruck",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "foodtruck@outlook.es",
        address: "Calle de San Lucas, 11, 28004 Madrid",
        photo: "https://www.foodtruckburger.es/sites/default/files/styles/slider/public/torre-fuera-de-carta.jpg?itok=_AcC3Mqh",
        phone: "+34 911 89 36 96",
        web: "https://www.foodtruckburger.es/",
        dishes: [],
        food_type: ['Americana'],
        location: [40.4237621, -3.6984147],
        status: "active"
    },
    {
        name: "Maye's Bistro",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@mayesbistro.es",
        address: "Paseo Tierra de Melide, 13A, Local 6, 28050 Madrid",
        photo: "https://u.tfstatic.com/restaurant_photos/315/291315/169/612/maye-s-bistro-montecarmelo-sala-c1e05.jpg",
        phone: "+34 912 87 62 72",
        web: "https://mayesbistro.es/",
        dishes: [],
        food_type: ['Americana'],
        location: [40.4693371, -3.7315906],
        status: "active"
    },
    {
        name: "Steakburger - Luchana",
        password: bcrypt.hashSync("rest", bcrypt.genSaltSync(bcryptSalt)),
        email: "info@steakburger.es",
        address: "Calle de Luchana, 17, 28010 Madrid",
        photo: "https://console.listae.com/files/2015/12/steak_burger_luchana.jpg",
        phone: "+34 911 73 44 10",
        web: "https://www.steakburger.es/",
        dishes: [],
        food_type: ['Americana'],
        location: [40.4302968, -3.702878],
        status: "active"
    },
]

Restaurant.deleteMany()
    .then(() => {
        return Restaurant.create(restaurants)
    })
    .then(restCreated => {
        console.log(`${restCreated.length} restaurant created!`);
        // console.log(restCreated.map(u => u._id));
    })
    .then(() => {
        // Close properly the connection to Mongoose
        mongoose.disconnect()
    })
    .catch(err => {
        mongoose.disconnect()
        throw err
    })