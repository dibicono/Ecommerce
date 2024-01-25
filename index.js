const express = require('express');
require('dotenv').config();
const app = express();
const puerto = process.env.port;
// para subir al servidor solamente
const cors = require('cors');

const productsRoutes = require('./routes/product.routes');
const { dbConnection } = require('./database/config');

app.use(cors());
app.use(express.json());

(async ()=>{
    
    await dbConnection();
    app.use(productsRoutes);

})();

app.listen(puerto, () => {
    console.log('Servidor escuchando en http://localhost:' + puerto);
});