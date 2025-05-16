const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
 
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/kaml_DB");

const port = 4000;

app.listen(port, () => {
    console.log("server is run on",port);
});

