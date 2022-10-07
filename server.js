const express = require('express')
const app = express()
const PORT = 3000
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
const { FindCursor } = require('mongodb')
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'Cluster0'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/',(request, response)=>{
   db.collection('books').find().toArray()
    .then(data => {
        response.render('index.ejs'/*, {info: data}*/)
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
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})