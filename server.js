const express = require('express')
const app = express()
const PORT = require('./config/.env')
const connectDB = require('./config/database')
const cors = require('cors')
const homeRoutes = require('./routes/home')
const mongoose = require('mongoose')

//dot env
require('dotenv').config({path: './config/.env'})

//grab config from database file
connectDB()

//setting up the views, ejs, public folder, using json
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//in theory if more pages were added, this would send the user along.
app.use('/', homeRoutes)

//the routes below are from the project before updating to Model-view-architecture

/*
app.get('/',(request, response)=>{
   db.collection('books').find().toArray()
    .then(data => {
        response.render('index.ejs'/*, {info: data}*//*)
        console.log(data)
    })
    .catch(error => console.error(error))
})

app.post("/addBook", (request, response) => {
    db.collection('books').insertOne({bookTitle: request.body.bookTitle,
    bookAuthor: request.body.bookAuthor, bookDescription: request.body.bookDescription, imgUrl: request.body.imgUrl,
    descriptionUrl: request.body.descriptionUrl, monthAndYear: request.body.monthAdded, googleBooksId: request.body.googleBooksId})
    .then(result => {
        console.log('Book added')
        response.redirect('/')
    })
    .catch(error => console.error(error))
}) */

app.listen(process.env.PORT, ()=>{
    console.log(`The server is running. What joy.`)
})