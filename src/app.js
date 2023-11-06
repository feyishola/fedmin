require("./connection/mongodb.con")();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/vi/")


app.listen(3000,()=>{
    console.log("app listening on port 3000");
})