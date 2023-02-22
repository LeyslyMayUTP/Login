const mongoose = require('mongoose')

//Importar variables de entornos locales
const dotenv = require('dotenv').config({ path: 'variables.env'});

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    //useCreateIndex: true
}).then(db => console.log('connection establishe successfully'))