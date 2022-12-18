const express = require('express')
const app = express()
const PORT = require('./config/.env')
const connectDB = require('./config/database')
const cors = require('cors')
const homeRoutes = require('./routes/home')
const mongoose = require('mongoose')
const ReCAPTCHA = require('google-recaptcha');
const RECAPTCHA_SECRET = require('./config/.env')
const googleSiteKey = '6LctgFQjAAAAAFx3y8MexRsvlLbVc1bcJK3yLr1H'

//dot env
require('dotenv').config({path: './config/.env'})

//grab config from database file
connectDB()

//initialize google-recaptcha with your secret key
const recaptcha = new ReCAPTCHA({
    secret: RECAPTCHA_SECRET,
})

//setting up the views, ejs, public folder, using json
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//in theory if more pages were added, this would send the user along.
app.use('/', homeRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`The server is running. What joy.`)
})