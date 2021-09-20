const mongoose = require("mongoose");
require("dotenv").config()
//databse on .ATLAS
mongoose.connect(process.env.ATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    } ) 
    .then(()=>console.log("conectado a la base de datos"))
    .catch((err)=>console.error(err));  

  