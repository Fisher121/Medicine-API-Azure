var express = require("express");
const mysql = require('mysql');



var app = express();

// var pool = mysql.createPool({
//     host:'34.116.183.91',
//     socketPath:'/cloudsql/medicineapi:europe-central2:medicinedbinstance', // comment this when running locally
//     database: 'questions',
//     user:'root',
//     password:'1234',
// }) 

app.get("/", (req, res, next) => {

    res.json("test12")
   
});

app.listen(8080, () => {

 console.log("Server running on port 8001");

});

