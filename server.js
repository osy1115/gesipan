const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const mysql = require('mysql');
const bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({extended:false}))

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'homepage'
})

connection.connect();


app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
})



app.get('/',(req,res)=>{
    res.render('index.html')
})

app.get('/list',(req,res)=>{
    res.render('list.html')
})

app.get('/write',(req,res)=>{
    res.render('write.html')
})

app.post('/write',(req,res)=>{
    res.render('write.html')
})

app.get('/modify',(req,res)=>{
    res.render('modify.html')
})

app.post('/modify',(req,res)=>{
    res.render('modify.html')
})


app.listen(3000,()=>{
    console.log(`start server port 3000`)
})