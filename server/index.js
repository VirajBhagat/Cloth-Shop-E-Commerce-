const express = require('express')
const app=express()
const cors=require('cors')

// var path = require('path');
// const express = require('express')
// const app=express()
// const cors=require('cors')
// const multer=require('multer')
// const Cookies = require('js-cookie')
// var cookieParser = require('cookie-parser');
// app.use(cookieParser())
// const fs = require('fs')

const mysql= require('mysql')
const bodyParser = require('body-parser')


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

const db=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cloth_db'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.get("/products",(req,res) => {
    const insertQuery= "select * from products";
    app.use("/images",express.static(`images`))
    db.query(insertQuery, (err,result) => {
        res.send(result)
    })
})

app.listen(3001,() => {
    console.log("Running on port 3001")
})


app.post("/sendData",(req,res)=>{
    const data=req.body.uname
    console.log(data);
})