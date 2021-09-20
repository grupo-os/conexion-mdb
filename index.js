const express = require('express');
require("dotenv").config()
require("./connection");
const app  = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"),()=>
    console.log(`server on port ${app.get("port")}`)
);
