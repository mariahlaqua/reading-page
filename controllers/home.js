const { TopologyDescription } = require('mongodb')
const Book = require('../models/book');
require('dotenv').config({path: '../config/.env'})

module.exports = {
    // handle get request for index page
    getIndex: async (req,res)=>{
        try{
            const recentlyRead = await Book.find({recentlyRead:true})
            const recommended = await Book.find({recommended: true})
            const currentlyReading = await Book.find({currentlyReading: true})
            res.render('index.ejs', {recentlyRead, recommended, currentlyReading})
            // console.log(recentlyRead)
        }catch(err){
            console.log(err)
        }
        
    },
    // handle post request from index form, search Google Books
    postIndex: async (req,res)=>{
        const recentlyRead = await Book.find({recentlyRead:true})
        const recommended = await Book.find({recommended: true})
        const currentlyReading = await Book.find({currentlyReading: true})
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${req.body.query}`, {
            headers: {'Content-type': 'application/JSON'},
        })
        data = await response.json()
        const books = data
        //console.log(req.body.query) uncomment if you need to see what is happening
        res.render('search.ejs', {books: books, recentlyRead, recommended, currentlyReading})
    },
    // creating a new item in the collection, of the user's book recommendation. Mongoose does the date for us.
    addBook: async (req,res)=>{
            console.log(req.body['g-recaptcha-response'])
            const response = await fetch(`${process.env.RECAPTCHA_URL}&secret=${process.env.RECAPTCHA_SECRET}&response=${req.body['g-recaptcha-response']}`)
            data = await response.json();
            console.log(data);
            if(data.score > 0.5){
                await Book.create({
                    title: req.body.title,
                    author: req.body.author,
                    currentlyReading: false,
                    recommended: true,
                    recentlyRead: false,
                    url: req.body.url,
                    image: req.body.image
                })
                res.redirect('/')
            }else{
                res.redirect('/')
            }
        }
}