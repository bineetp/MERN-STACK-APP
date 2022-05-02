const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get("/", (req, res)=>{
    res.send("hahha");
})



const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server Started on ${PORT}`));