const mongoose = require('mongoose');


const dbConnection = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("conectado");
    } catch (error) {
        console.log(error);
        throw new Error("error conectando");
    }

}

module.exports = {
    dbConnection
}