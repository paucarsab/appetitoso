// Seeds file that remove all users and create 10 new users
require('dotenv').config()
// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DB_LOCAL}`, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    profile_photo: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    email: "alice@alice.com",
    status: "active"
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    profile_photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    email: "bob@bob.com",
    status: "active"
  },
  {
    username: "pau",
    password: bcrypt.hashSync("pau", bcrypt.genSaltSync(bcryptSalt)),
    profile_photo: "https://pbs.twimg.com/profile_images/378800000322733418/4ebe29b34cbacee7409b52425cfa4591_400x400.jpeg",
    email: "paucarsab@gmail.com",
    status: "active"
  },
  {
    username: "Chris",
    password: bcrypt.hashSync("chris", bcrypt.genSaltSync(bcryptSalt)),
    email: "chris@chris.com",
    status: "active"
  },
  {
    username: "user",
    password: bcrypt.hashSync("user", bcrypt.genSaltSync(bcryptSalt)),
    email: "user@user.com",
    status: "active"
  },
  {
    username: "inactive",
    password: bcrypt.hashSync("inactive", bcrypt.genSaltSync(bcryptSalt)),
    email: "inactive@gmail.com",
    status: "inactive"
  },
  {
    username: "armando",
    password: bcrypt.hashSync("armando", bcrypt.genSaltSync(bcryptSalt)),
    profile_photo: "https://cdn-images-1.medium.com/fit/c/200/200/0*b-_JMrFNQXC2miuI.jpeg",
    email: "momo@momo.com",
    status: "active"
  },
  {
    username: "alex",
    password: bcrypt.hashSync("alex", bcrypt.genSaltSync(bcryptSalt)),
    profile_photo: "https://www.equiposytalento.com/upload/talent_entrevistashhunters/000/45/alexsanchez_wolfonoir.jpg",
    email: "alex@alex.com",
    status: "active"
  },
  {
    username: "cesar",
    password: bcrypt.hashSync("cesar", bcrypt.genSaltSync(bcryptSalt)),
    profile_photo: "https://pbs.twimg.com/profile_images/2620619779/image_400x400.jpg",
    email: "cesar@cesar.com",
    status: "active"
  },
  {
    username: "pedro",
    password: bcrypt.hashSync("pedro", bcrypt.genSaltSync(bcryptSalt)),
    profile_photo: "https://pbs.twimg.com/profile_images/1003203820963450880/2uQC1iKj_400x400.jpg",
    email: "pedro@pedro.com",
    status: "active"
  },

]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created!`);
    // console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })