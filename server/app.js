// Enviroment variables
require('dotenv').config()

// Database connection
require('./configs/mongoose.config')

// Application instance
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/locals.config')(app)
require('./configs/session.config')(app)


// Base URLS
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/dishes', require('./routes/dishes.routes'))
app.use('/api/rest', require('./routes/rest.routes'))
app.use('/api/files', require('./routes/files.routes.js'))
app.use('/api/edit', require('./routes/edit.routes.js'))

//Index a enviar
app.use((req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

module.exports = app