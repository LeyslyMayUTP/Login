const app = require('./app')
require('./connection');

// Leer localhost de variables y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


async function init(){
    await app.listen(port, host, () => {
        console.log('Server on Localhost:3000');
    });
}

init();